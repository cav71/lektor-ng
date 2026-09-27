import tomllib
from pathlib import Path

__version__ = "@version@"
__hash__ = "@sha@"


def get_version() -> str:
    if __version__ == "@version@":
        path = Path(__file__).parent.parent.parent / "pyproject.toml"
        return tomllib.loads(path.read_text())["project"]["version"]
    return __version__
