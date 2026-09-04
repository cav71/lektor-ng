import inspect
from pathlib import Path
from unittest.mock import patch

import pytest

from lektor_ng.project import Project


def test_Project_get_output_path(tmp_path: Path) -> None:
    project_file = tmp_path / "test.lektorproject"
    project_file.touch()
    project = Project.from_file(project_file)
    assert Path(project.get_output_path()).parts[-2:] == ("builds", project.id)


def test_Project_get_output_path_is_relative_to_project_file(tmp_path: Path) -> None:
    tree = tmp_path / "tree"
    tree.mkdir()
    project_file = tmp_path / "test.lektorproject"
    project_file.write_text(
        inspect.cleandoc(
            """[project]
            path = tree
            output_path = htdocs
            """
        )
    )

    project = Project.from_file(project_file)
    assert project.get_output_path() == str(tmp_path / "htdocs")


def test_project_discovery(demo_projects):
    root = demo_projects("demo-project")
    path = root / "templates/blocks/text.html"

    pytest.raises(ValueError, Project.discover, path)

    with patch("os.getcwd", return_value=str(root.parent)):
        project = Project.discover(path)
        assert project is not None
        assert project.root == root
