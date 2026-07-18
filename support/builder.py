#!/usr/bin/env python
# /// script
# requires-python = ">=3.13"
# dependencies = [
#   "build",
# ]
# ///
from __future__ import annotations

import argparse
import contextlib
import dataclasses as dc
import json
import logging
import re
import shutil
import subprocess
import sys
from pathlib import Path
from typing import Callable, Generator, Literal
import tomllib
import urllib.request
import urllib.error

log = logging.getLogger(__name__)


@dc.dataclass
class Runner:
    exe: list[str] | None = None
    verbose: bool = False

    def __call__(self, args, verbose: bool | None = None, capture=False):
        verbose = self.verbose if verbose is None else verbose
        cmd = [str(c) for c in [*(self.exe or []), *args]]
        if capture:
            return subprocess.check_output(
                cmd, encoding="utf-8", stderr=None if verbose else subprocess.DEVNULL
            )
        return subprocess.check_call(
            cmd,
            encoding="utf-8",
            stderr=None if verbose else subprocess.DEVNULL,
            stdout=None if verbose else subprocess.DEVNULL,
        )


@dc.dataclass
class Git:
    worktree: Path
    runner: Runner

    @classmethod
    def new(cls, worktree: Path, verbose: bool = False):
        return cls(
            worktree,
            Runner(exe=["git", "--git-dir", f"{worktree}/.git"], verbose=verbose),
        )

    def branch(self):
        return self.runner(["branch", "--show-current"], capture=True).strip()

    def sha(self):
        return self.runner(["rev-parse", "HEAD"], capture=True).strip()


@dc.dataclass
class GData:
    name: str  # acbox
    sha: str  # 33eebf59f98adc51ee62f4db4a9ced2cb84bdaa2
    version: str
    mode: Literal["beta", "release"]
    number: int | None

    # ref: str  # refs/heads/beta/0.0.2
    # rev: str  # 33eebf5
    # url: str  # ?
    # run_number: int  # 123
    # default_branch: str  # <default-branch eg. main|master>
    # branch: str

    # these are added here
    # count: int | None

    def rev(self):
        return self.sha[:7]

    def version_string(self):
        if self.mode == "beta":
            return f"{self.version}b{self.number}"
        elif self.mode == "release":
            return self.version
        else:
            raise RuntimeError(f"cannot process {self.mode}")


@contextlib.contextmanager
def backups() -> Generator[Callable[[Path | str], tuple[Path, Path]], None, None]:
    pathlist: list[Path] = []

    def save(path: Path | str) -> tuple[Path, Path]:
        nonlocal pathlist
        original = Path(path).expanduser().absolute()
        backup = original.parent / f"{original.name}.bak"
        if backup.exists():
            raise RuntimeError("backup file present", backup)
        shutil.copy(original, backup)
        pathlist.append(backup)
        return original, backup

    try:
        yield save
    finally:
        for backup in pathlist:
            original = backup.with_suffix("")
            original.unlink()
            shutil.move(backup, original)


def parse_ref(
    ref: str, default_branch: str
) -> tuple[Literal["beta", "release", "main"], str | None]:
    # ref is:
    #   refs/heads/beta/0.0.0
    #   refs/heads/main
    #   refs/tags/v0.0.0
    # returns -> (kind, branch_version)

    if match := re.search(r"refs/tags/v(?P<version>\d+([.]\d+)*)", ref):
        return ("release", match.group("version"))
    elif match := re.search(r"refs/heads/beta/(?P<version>\d+([.]\d+)*)", ref):
        return ("beta", match.group("version"))
    elif ref == f"refs/heads/{default_branch}":
        return ("main", None)
    raise RuntimeError(f"cannot parse {ref=}")


def get_pypi_data(name):
    url = f"https://pypi.org/pypi/{name}/json"
    try:
        with urllib.request.urlopen(url) as response:
            if response.status != 200:
                return None
            return json.loads(response.read().decode("utf-8"))
    except urllib.error.HTTPError:
        return None


def replacer(path: Path, variables: dict) -> None:
    txt = path.read_text()
    for key, value in variables.items():
        txt = txt.replace(f"@{key}@", value)
    path.write_text(txt)


def process_checkout(git: Git, mode: Literal["beta", "release"]) -> GData:
    pyproject = tomllib.loads(Path("pyproject.toml").read_text())
    pypi = get_pypi_data(pyproject["project"]["name"])
    return GData(
        name=pyproject["project"]["name"],
        sha=git.sha(),
        version=pyproject["project"]["version"],
        mode=mode,
        number=0 if pypi is None else 9999,
    )


def parse_arguments():
    parser = argparse.ArgumentParser()

    parser.add_argument(
        "-v", "--verbose", dest="loglevel", action="append_const", const=1
    )
    parser.add_argument(
        "-q", "--quiet", dest="loglevel", action="append_const", const=-1
    )
    parser.add_argument("-n", "--dry-run", dest="dryrun", action="store_true")

    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument("--github", action="store_const", dest="source", const="github")
    group.add_argument(
        "--checkout", action="store_const", dest="source", const="checkout"
    )

    parser.add_argument("mode", choices=["beta", "release"])
    parser.add_argument("paths", nargs="*", type=Path)
    args = parser.parse_args()

    args.loglevel = max(min(sum(args.loglevel or [0]), 1), -1)
    logging.basicConfig(
        level={-1: logging.WARNING, 0: logging.INFO, 1: logging.DEBUG}[args.loglevel]
    )

    args.error = parser.error
    return args


def main() -> None:
    args = parse_arguments()

    workdir = Path.cwd()
    runc = Runner(verbose=args.loglevel > 0)
    git = Git.new(Path.cwd(), verbose=args.loglevel > 0)

    log.info(
        "python executable (%s) %s",
        (runc([sys.executable, "-V"], capture=True) or "").strip(),
        sys.executable,
    )
    log.info("git client using worktree %s", git.worktree)
    log.info("current working dir '%s'", workdir)

    if args.source == "checkout":
        gdata = process_checkout(git, mode=args.mode)
        print(gdata.version_string())
    else:
        raise RuntimeError(f"not implemented {args.source}")

    log.info("creating [%s] from '%s'", args.mode, args.source)
    pyproject = Path("pyproject.toml")

    with backups() as save:
        # fix pyproject
        log.info("fixing %s", pyproject)
        save(pyproject)
        lines = pyproject.read_text().split("\n")
        lineno = [
            i for i, line in enumerate(lines) if re.search(r"^\s*version\s*=", line)
        ][0]
        lines[lineno] = f'version = "{gdata.version_string()}"'
        pyproject.write_text("\n".join(lines))

        # replace @version@ and @hash@
        for path in args.paths:
            save(path)
            replacer(path, dict(version=gdata.version_string(), sha=gdata.sha))

        # building wheel
        log.info("building wheel package")
        if not args.dryrun:
            runc([sys.executable, "-m", "build", "."], verbose=True)


if __name__ == "__main__":
    main()
