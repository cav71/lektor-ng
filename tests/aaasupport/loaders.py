from __future__ import annotations

import dataclasses as dc
import json
from pathlib import Path
from typing import Any

import pytest

DATADIR = Path(__file__).parent.parent / "data"


@dc.dataclass
class Finder:
    root: Path  # type: ignore[annotation-unchecked]
    subdirs: list[Path] = dc.field(default_factory=list)

    def lookup(self, path: Path | str, abort: bool = True) -> Path | None:
        candidates = [
            self.root / path,
            *self.subdirs,
        ]
        for candidate in reversed(candidates):
            if candidate.exists():
                return candidate
        if abort:
            raise FileNotFoundError(f"cannot find {path}", candidates)
        return None

    def load(self, path: Path, here: str | None = None, mode: str | None = None) -> Any:
        source = self.lookup(path, here=here)
        mode = mode or source.suffix.strip(".")
        if mode == "json":
            return json.loads(source.read_text())
        elif mode == "raw":
            return source.read_bytes()
        else:
            return source.read_text()


@pytest.fixture(scope="session")
def finder(request):
    yield Finder(DATADIR)


@pytest.fixture(scope="module")
def mfinder(request):
    path = Path(request.module.__file__).parent
    yield Finder(DATADIR, subdirs=[path, path / "data"])
