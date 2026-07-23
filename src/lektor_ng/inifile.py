from configparser import RawConfigParser, ConfigParser, MissingSectionHeaderError
import dataclasses as dc
import io
from pathlib import Path
from typing import Any, Generator, Iterator
import pickle
import os


GLOBAL_NAME = "xyz"


def config_parser_load(filename: str | Path) -> tuple[ConfigParser, bool]:
    path = Path(filename)
    config = ConfigParser()
    try:
        is_new = config.read(path)
        return config, not bool(is_new)
    except MissingSectionHeaderError:
        text = path.read_text()
        config.read_string(f"[{GLOBAL_NAME}]\n{text}")
        return config, False


@dc.dataclass
class IniFile:
    filename: str
    is_new: bool = False

    def __post_init__(self) -> None:
        self.filename = os.path.abspath(self.filename)
        self.config, self.is_new = config_parser_load(self.filename)

    def __iter__(self) -> Iterator[str]:
        if GLOBAL_NAME in self.config:
            for option in self.config[GLOBAL_NAME]:
                yield option

        for section in self.config:
            if section in {GLOBAL_NAME, "DEFAULT"}:
                continue
            for option in self.config[section]:
                yield f"{section}.{option}"

    def get(self, name: str, default: Any = None) -> Any:
        section, _, option = name.rpartition(".")
        while section.endswith("."):
            section, option = section[:-1], f".{option}"
        if not section:
            return (
                self.config[GLOBAL_NAME][option]
                if option in self.config[GLOBAL_NAME]
                else default
            )
        if section not in self.sections():
            return default
        return self.config[section].get(option, default)

    def items(self) -> Generator[tuple[str, Any], None, None]:
        for key in self:
            yield key, self.get(key)

    def __getitem__(self, name: str) -> Any:
        return self.get(name)

    def __setitem__(self, name: str, value: Any) -> None:
        section, _, option = name.rpartition(".")
        if not section:
            self.config[GLOBAL_NAME][option] = value
            return
        if section not in self.sections():
            self.config.add_section(section)
        self.config[section][option] = value

    def sections(self) -> list[str]:
        return self.config.sections()

    def section_as_dict(self, name: str) -> dict[str, Any]:
        result = {}
        for section in self.sections():
            if section != name:
                continue
            for option in self.config[section]:
                result[option] = self.config[section][option]
        return result

    def get_int(self, name: str, default: Any = None) -> bool | None:
        value = self.get(name, default)
        if value is None:
            return None
        return int(value)

    def get_bool(self, name: str, default: Any = False) -> bool | None:
        value = self.get(name)
        if value is None:
            return None
        return bool(
            {
                "0": False,
                "no": False,
                "false": False,
                "1": True,
                "yes": True,
                "true": True,
            }.get(value, default)
        )

    def save(self, create_folder=False) -> None:
        raise NotImplementedError("not ready")
        buffer = io.StringIO()
        self.config.write(buffer)
        with open(self.filename, "w") as fp:
            fp.write(buffer.getvalue())
