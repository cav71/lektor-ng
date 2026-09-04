from __future__ import annotations

import dataclasses as dc
import hashlib
import os
import sys
from enum import Enum
from pathlib import Path

from werkzeug.utils import cached_property

from lektor_ng.environment import Environment
from lektor_ng.inifile import IniFile
from lektor_ng.utils import comma_delimited, get_cache_dir, untrusted_to_os_path


@dc.dataclass
class Project:
    name: str
    config: Path
    root: Path
    themes: list[str] = dc.field(default_factory=list)

    def __post_init__(self):
        self.id = hashlib.md5(str(self.tree).encode("utf-8")).hexdigest()

    @property
    def tree(self):
        return str(self.root)

    @property
    def project_file(self):
        return str(self.config)

    @classmethod
    def discover(cls, base: Path | None = None) -> None | Project:
        """Auto discovers the closest project."""
        top = Path.cwd()
        here = (base.relative_to(top) if base else top).resolve()
        while True:
            if project := cls.from_path(here, extension_required=True):
                return project
            if here == top:
                break
            here = here.parent
        return None

    def open_config(self):
        if self.project_file is None:
            raise RuntimeError("This project has no project file.")
        return IniFile(self.project_file)

    @classmethod
    def from_file(cls, filename: str):
        """Reads a project from a project file."""
        inifile = IniFile(filename)
        if inifile.is_new:
            return None

        name = inifile.get("project.name") or os.path.basename(filename).rsplit(".")[0].title()
        path = os.path.join(
            os.path.dirname(filename),
            untrusted_to_os_path(inifile.get("project.path") or "."),
        )

        themes = inifile.get("project.themes")
        if themes is not None:
            themes = [x.strip() for x in themes.split(",")]
        else:
            themes = []

        return cls(
            name=name,
            config=Path(filename),
            root=Path(path),
            themes=themes,
        )

    @classmethod
    def from_path(cls, path: Path, extension_required=False) -> list[Project] | None:
        path = Path(path)
        if not path.is_dir():
            if extension_required and path.suffix != ".lektorproject":
                return None
            return cls.from_file(str(path))

        if len(paths := list(path.glob("*.lektorproject"))) > 1:
            raise RuntimeError(f"multiple project files: {paths}")
        return cls.from_file(str(paths[0])) if paths else None

    @property
    def project_path(self):
        return self.project_file or self.tree

    def get_output_path(self):
        """The path where output files are stored."""
        config = self.open_config()  # raises if no project_file
        output_path = config.get("project.output_path")
        if output_path:
            path = Path(config.filename).parent / output_path
        else:
            path = Path(get_cache_dir(), "builds", self.id)
        return str(path)

    class PackageCacheType(Enum):
        VENV = "venv"  # The new virtual environment-based package cache
        FLAT = "flat"  # No longer used flat-directory package cache

    def get_package_cache_path(self, cache_type: PackageCacheType = PackageCacheType.VENV) -> Path:
        """The path where plugin packages are stored."""
        if cache_type is self.PackageCacheType.FLAT:
            cache_name = "packages"
        else:
            cache_name = "venvs"

        h = hashlib.md5()
        h.update(self.id.encode("utf-8"))
        h.update(sys.version.encode("utf-8"))
        h.update(sys.prefix.encode("utf-8"))

        return Path(get_cache_dir(), cache_name, h.hexdigest())

    def content_path_from_filename(self, filename):
        """Given a filename returns the content path or None if
        not in project.
        """
        dirname, basename = os.path.split(os.path.abspath(filename))
        if basename == "contents.lr":
            path = dirname
        elif basename.endswith(".lr"):
            path = os.path.join(dirname, basename[:-3])
        else:
            return None

        content_path = os.path.normpath(self.tree).split(os.path.sep) + ["content"]
        file_path = os.path.normpath(path).split(os.path.sep)
        prefix = os.path.commonprefix([content_path, file_path])
        if prefix == content_path:
            return "/" + "/".join(file_path[len(content_path) :])
        return None

    def make_env(self, load_plugins=True):
        """Create a new environment for this project."""
        return Environment(self, load_plugins=load_plugins)

    @cached_property
    def excluded_assets(self):
        """List of glob patterns matching filenames of excluded assets.

        Combines with default EXCLUDED_ASSETS.
        """
        config = self.open_config()
        return list(comma_delimited(config.get("project.excluded_assets", "")))

    @cached_property
    def included_assets(self):
        """List of glob patterns matching filenames of included assets.

        Overrides both excluded_assets and the default excluded patterns.
        """
        config = self.open_config()
        return list(comma_delimited(config.get("project.included_assets", "")))

    def to_json(self):
        return {
            "name": self.name,
            "project_file": self.project_file,
            "project_path": self.project_path,
            "default_output_path": self.get_output_path(),
            "package_cache_path": str(self.get_package_cache_path()),
            "id": self.id,
            "tree": self.tree,
        }
