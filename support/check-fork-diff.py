#!/usr/bin/env python
# /// script
# requires-python = ">=3.11"
# dependencies = [
#     "ruff",
#     "tabulate",
# ]
# ///

import subprocess
import tempfile
from argparse import ArgumentParser
from pathlib import Path

from tabulate import tabulate


def changes_since(commit, path, subpath):
    return [
        name.partition("/")[2]
        for name in subprocess.check_output(
            [
                "git",
                "diff",
                commit,
                "--name-only",
                str(path / subpath),
            ],
            text=True,
            cwd=str(path),
        ).split("\n")
        if name.strip()
    ]


def format(source, dest):
    dest.write(source.read_text().replace("lektor_ng", "lektor"))
    dest.seek(0)
    subprocess.check_call(
        ["uv", "run", "ruff", "format", "--line-length", "120", dest.name],
        stderr=subprocess.DEVNULL,
        stdout=subprocess.DEVNULL,
    )
    subprocess.check_call(
        ["uv", "run", "ruff", "check", "--select", "I", "--fix", dest.name],
        stderr=subprocess.DEVNULL,
        stdout=subprocess.DEVNULL,
    )


def diff(upstream, fork, path, interactive):
    left = upstream / path
    right = fork / path
    if not left.exists():
        return ["missing", ""]
    if not right.exists():
        return ["", "missing"]
    with (
        tempfile.NamedTemporaryFile(mode="w+", delete_on_close=True) as temp_file1,
        tempfile.NamedTemporaryFile(mode="w+", delete_on_close=True) as temp_file2,
    ):
        format(left, temp_file1)
        format(right, temp_file2)

        if Path(temp_file1.name).read_text() == Path(temp_file2.name).read_text():
            return ["", ""]
        if interactive:
            subprocess.check_call(["bcomp", temp_file1.name, temp_file2.name])
        return ["*", "*"]


def main():
    p = ArgumentParser()
    p.add_argument("-i", "--interactive", action="store_true")
    p.add_argument("upstream", type=Path)
    args = p.parse_args()

    args.upstream = args.upstream.resolve()
    args.fork = Path.cwd()

    upstream = args.upstream / "lektor"
    fork = args.fork / "src" / "lektor_ng"

    left = {p.relative_to(upstream) for p in upstream.rglob("*.py") if p.is_file()}
    right = {p.relative_to(fork) for p in fork.rglob("*.py") if p.is_file()}

    changed = changes_since("e59094e", args.upstream, "lektor")
    allpaths = left | right
    result = []
    for path in allpaths:
        left, right = diff(upstream, fork, path, args.interactive)
        if not any((left, right)):
            continue
        result.append((path, "C" if path in changed else " ", left, right))
    result.sort(key=lambda x: str(x[0]).split("/"))
    print(tabulate(result, headers=["path", "changed", "upstream", "this"]))


if __name__ == "__main__":
    main()
