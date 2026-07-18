from pathlib import Path
import tomllib

__version__ = "@version@"
__hash__ = "@sha@"


def get_version() -> str:
    if __version__ == "@version@":
        return tomllib.loads(Path("pyproject.toml").read_text())["project"]["version"] 
    return __version__
