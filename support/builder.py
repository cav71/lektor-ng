#!/usr/bin/env python
# /// script
# requires-python = ">=3.13"
# dependencies = [
#   "build",
# ]
# ///
from __future__ import annotations

import argparse
import collections
import contextlib
import dataclasses as dc
import functools
import json
import logging
import os
import re
import shutil
import subprocess
import sys
import tomllib
import urllib.error
import urllib.request
from collections.abc import Callable, Generator
from enum import StrEnum, auto
from pathlib import Path
from typing import Any, TypedDict
from urllib.parse import quote


class Releases(TypedDict):
    versions: list[str]
    releases: list[str]
    betas: dict[str, list[int]]
    posts: dict[str, list[int]]
    category: dict[str, dict[str, str]]


log = logging.getLogger(__name__)


CACHEDIR: Path | None = None


class ReleaseMode(StrEnum):
    BETA = auto()
    RELEASE = auto()
    POST = auto()
    TRANS = auto()


def relative_to(path: Path | None, cwd: Path | None = None) -> Path | None:
    if not path:
        return None
    path = path.resolve()
    with contextlib.suppress(ValueError):
        return path.relative_to(cwd or Path.cwd())
    return path


def rget(data: dict, key: str) -> str | None:
    stack = collections.deque(key.split("."))
    value = None
    cur = data
    while stack:
        node = stack.popleft()
        if node in cur:
            value = cur[node]
            cur = cur[node]
        else:
            return None
    return value


def cache(name: bool | None | str = None):
    def _cache(fn):
        @functools.wraps(fn)
        def _cache1(*args, **kwargs):
            nonlocal name
            if name is False:
                return fn(*args, **kwargs)
            name = fn.__name__ if name in {True, None, ""} else name
            if CACHEDIR and (path := (CACHEDIR / name)).exists():
                return json.loads(path.read_text())
            data = fn(*args, **kwargs)
            if CACHEDIR:
                (CACHEDIR / name).write_text(json.dumps(data))
            return data

        return _cache1

    return _cache


@dc.dataclass
class Runner:
    exe: list[str] | None = None
    verbose: bool = False

    def __call__(self, args, verbose: bool | None = None, capture=False):
        verbose = self.verbose if verbose is None else verbose
        cmd = [str(c) for c in [*(self.exe or []), *args]]
        if capture:
            return subprocess.check_output(cmd, encoding="utf-8", stderr=None if verbose else subprocess.DEVNULL)
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

    def default(self):
        return (
            self.runner(["symbolic-ref", "refs/remotes/origin/HEAD", "--short"], capture=True)
            .strip()
            .rpartition("/")[2]
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
    mode: ReleaseMode
    number: int | None = None
    branch: str | None = None

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
        if self.mode == ReleaseMode.BETA:
            return f"{self.version}b{self.number}"
        elif self.mode == ReleaseMode.RELEASE:
            return self.version
        elif self.mode == ReleaseMode.POST:
            return f"{self.version}.post{self.number}"
        elif self.mode == ReleaseMode.TRANS:
            return f"{self.version}.x{self.sha[:7]}"
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


def parse_ref(ref: str, default_branch: str | None) -> tuple[ReleaseMode, str | None]:
    # ref is:
    #   refs/heads/main
    #   refs/heads/beta/0.0.0
    #   refs/tags/v0.0.0
    # returns -> "beta" | "main" | None
    if match := re.search(r"refs/tags/v(?P<version>\d+([.]\d+)*)", ref):
        return None
    elif match := re.search(r"(refs/heads/)?beta/(?P<version>\d+([.]\d+)*)", ref):
        return f"beta/{match.group('version')}"
    elif ref == f"refs/heads/{default_branch}":
        return default_branch
    raise RuntimeError(f"cannot parse {ref=}")


@cache("pypi-data")
def pypi_fetch_data(name):
    url = f"https://pypi.org/pypi/{name}/json"
    try:
        with urllib.request.urlopen(url) as response:
            if response.status != 200:
                return None
            return json.loads(response.read().decode("utf-8"))
    except urllib.error.HTTPError as exc:
        log.debug("unable to pypi lookup '%s': %s", name, exc)
        return None


def pypi_parse_releases(name: str, data: dict[str, Any] | None = None) -> Releases | None:
    if not (data := data or pypi_fetch_data(name)):
        return None
    exprs = {
        re.compile(r"^(?P<version>\d+([.]\d+)*)$"): "releases",
        re.compile(r"^(?P<version>\d+([.]\d+)*)b(?P<number>\d+)$"): "betas",
        re.compile(r"^(?P<version>\d+([.]\d+)*)[.]post(?P<number>\d+)$"): "posts",
    }

    releases: Releases = {
        "releases": [],
        "betas": collections.defaultdict(list),
        "posts": collections.defaultdict(list),
        "versions": [],
        "category": {},
    }
    for version in (data or {}).get("releases", []):
        kind = None
        for expr, key in exprs.items():
            if match := expr.search(version):
                kind = key
                break
        else:
            raise RuntimeError(f"cannot identify {version=}")

        if kind == "releases":
            releases[key].append(match.group("version"))
        else:
            releases[key][match.group("version")].append(int(match.group("number")))

        releases["versions"].append(version)
        releases["category"][version] = kind

    return releases


def replacer(path: Path, variables: dict) -> None:
    txt = path.read_text()
    for key, value in variables.items():
        txt = txt.replace(f"@{key}@", value)
    path.write_text(txt)


def process_checkout(
    mode: ReleaseMode,
    pyproject: dict[str, Any],
    gitdump: dict[str, Any] | None = None,
    git: Git | None = None,
) -> GData:

    name = pyproject["project"]["name"]
    version = pyproject["project"]["version"]

    sha = (gitdump or {}).get("sha") or (git.sha() if git else None)
    log.debug("got sha '%s'", sha)

    branch = rget(gitdump, "ref") or (git.branch() if git else None)
    default_branch = rget(gitdump, "event.repository.default_branch") or (git.default() if git else None)
    log.debug("got branch '%s' (default %s)", branch, default_branch)
    branch = parse_ref(branch, default_branch)

    return GData(
        name=name,
        sha=sha,
        version=version,
        mode=str(mode),
        branch=branch,
    )


def parse_arguments():
    global CACHEDIR
    parser = argparse.ArgumentParser()

    group = parser.add_mutually_exclusive_group()
    group.add_argument("-v", "--verbose", dest="loglevel", action="append_const", const=1)
    group.add_argument("-q", "--quiet", dest="loglevel", action="append_const", const=-1)
    parser.add_argument("-n", "--dry-run", dest="dryrun", action="store_true")
    parser.add_argument("-c", "--cache", type=Path)
    parser.add_argument("--dump", action="store_true")
    parser.add_argument("--pyproject", type=Path, default=Path("pyproject.toml"))
    parser.add_argument("--gitdump", default=os.getenv("GITHUB_DUMP"))

    parser.add_argument("mode", choices=list(map(str, ReleaseMode)))
    parser.add_argument("paths", nargs="*", type=lambda p: relative_to(Path(p)))
    args = parser.parse_args()
    args.error = parser.error

    # CACHE
    if CACHEDIR := relative_to(args.cache):
        log.info("using cachedir '%s'", CACHEDIR)
        CACHEDIR.mkdir(parents=True, exist_ok=True)

    # LOG
    args.loglevel = max(min(sum(args.loglevel or [0]), 1), -1)
    logging.basicConfig(level={-1: logging.WARNING, 0: logging.INFO, 1: logging.DEBUG}[args.loglevel])

    # PYPROJECT
    args.pyprojectpath = relative_to(args.pyproject.resolve())
    if not args.pyprojectpath.exists():
        args.error(f"file not present {args.pyprojectpath}")
    try:
        log.info("loading pyproject from '%s'", args.pyprojectpath)
        args.pyproject = tomllib.loads(args.pyprojectpath.read_text())
    except tomllib.TOMLDecodeError:
        args.error(f"cannot parse pyproject file {args.pyprojectpath}")

    # GITDUMP
    if args.gitdump:
        args.gitdump = Path(args.gitdump[1:]).read_text() if args.gitdump.startswith("@") else args.gitdump
        args.gitdump = json.loads(args.gitdump)

    log.info(
        "%sloading github data from GITHUB_DUMP or --gitdump",
        "" if args.gitdump else "not ",
    )

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

    name = args.pyproject["project"]["name"]
    log.info("loading pypi data for '%s'", name)

    gdata = process_checkout(args.mode, args.pyproject, args.gitdump, git)
    pypi: Releases = pypi_parse_releases(name) or {}
    if args.mode in {"beta", "post"}:
        last = max(pypi.get(f"{args.mode}s", {}).get(gdata.version, [-1]))
        gdata.number = last + 1
    gdata.branch = git.branch()

    if (version := gdata.version_string()) in pypi.get("versions", []):
        args.error(f"version '{version}' already present in pypi")

    variables = {
        "version": gdata.version_string(),
        "sha": gdata.sha,
        "branch": gdata.branch,
        "mode": args.mode,
        "qbranch": quote(gdata.branch),
    }

    if args.dump:
        print(f"version_string: {gdata.version_string()}")
        print(f"{gdata=}")
        print(f"{variables=}")
        return

    log.info("gdata (%s) = %s", gdata.version_string(), gdata)
    log.info("variables: %s", variables)
    with backups() as save:
        # fix pyproject
        log.debug("fixing %s", args.pyprojectpath)
        save(args.pyprojectpath)
        lines = args.pyprojectpath.read_text().split("\n")
        lineno = next(i for i, line in enumerate(lines) if re.search(r"^\s*version\s*=", line))
        lines[lineno] = f'version = "{gdata.version_string()}"'
        args.pyprojectpath.write_text("\n".join(lines))

        # replace @version@ and @hash@
        for path in args.paths:
            log.info("fixing %s", path)
            save(path)
            replacer(path, variables)

        # building wheel
        log.info("building wheel package in %s", args.pyprojectpath.parent)
        if not args.dryrun:
            runc([sys.executable, "-m", "build", args.pyprojectpath.parent], verbose=True)


if __name__ == "__main__":
    main()
