from __future__ import annotations

import dataclasses as dc
import json
from pathlib import Path
from typing import Any

import pytest

DATADIR = Path(__file__).parent.parent / "data"


@pytest.fixture(scope="module")
def resolver(request):
    """return a resolver object to lookup for test data

    Example:
        def test_me(resolver):
            print(resolver.lookup("a/b/c")) -> tests/data/a/b/c
    """

    @dc.dataclass
    class Resolver:
        root: Path  # type: ignore[annotation-unchecked]
        name: str  # type: ignore[annotation-unchecked]

        def lookup(self, path: Path | str) -> Path:
            candidates = [
                self.root / self.name / path,
                self.root / path,
            ]
            for candidate in candidates:
                if candidate.exists():
                    return candidate
            raise FileNotFoundError(f"cannot find {path}", candidates)

        def load(self, path: Path, mode: str | None = None) -> Any:
            source = self.lookup(path)
            mode = mode or source.suffix.strip(".")
            if mode == "json":
                return json.loads(source.read_text())
            elif mode == "raw":
                return source.read_bytes()
            else:
                return source.read_text()

    yield Resolver(DATADIR, request.module.__name__)
