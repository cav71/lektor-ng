# pylint: disable=import-outside-toplevel
import os
import sys
from itertools import chain
from pathlib import Path
from lektor_ng.project import Project
from lektor_ng import cli_utils
import click

from lektor_ng.cli_utils import (
    ResolvedPath,
)
from lektor_ng.version import get_version


def add_options(fn):
    fn = click.argument(
        "project_path",
        type=lambda p: Path(p).expanduser().resolve(),
    )(fn)

    fn = click.version_option(prog_name="Lektor", version=get_version())(fn)

    fn = click.option(
        "-v",
        "--verbose",
        "verbosity",
        count=True,
        help="Increases the verbosity of the logging.",
    )(fn)

    fn = cli_utils.extraflag(fn)

    fn = click.option(
        "--buildstate-path",
        type=click.Path(writable=True, file_okay=False),
        default=None,
        help="Path to a directory that Lektor will use for coordinating "
        "the state of the build. Defaults to a directory named "
        "`.lektor` inside the output path.",
    )(fn)

    fn = click.option(
        "--source-info-only",
        is_flag=True,
        help="Instead of building only updates the source infos.  The "
        "source info is used by the web admin panel to quickly find "
        "information about the source files (for instance jump to "
        "files).",
    )(fn)

    fn = cli_utils.pruneflag(fn)

    fn = click.option(
        "--watch",
        is_flag=True,
        help="If this is enabled the build "
        "process goes into an automatic loop where it watches the "
        "file system for changes and rebuilds.",
    )(fn)

    fn = click.option(
        "-O",
        "--output-path",
        type=ResolvedPath(writable=True, file_okay=False),
        default=None,
        help="The output path.",
    )(fn)

    return fn


@click.command()
@add_options
def main(
    output_path,
    watch,
    prune,
    verbosity,
    source_info_only,
    buildstate_path,
    extra_flags,
    project_path,
):
    """Builds the entire project into the final artifacts.

    The default behavior is to build the project into the default build
    output path which can be discovered with the `project-info` command
    but an alternative output folder can be provided with the `--output-path`
    option.

    The default behavior is to perform a build followed by a pruning step
    which removes no longer referenced artifacts from the output folder.
    Lektor will only build the files that require rebuilding if the output
    folder is reused.

    To enforce a clean build you have to issue a `clean` command first.

    If the build fails the exit code will be `1` otherwise `0`.  This can be
    used by external scripts to only deploy on successful build for instance.
    """
    from lektor_ng.builder import Builder
    from lektor_ng.reporter import CliReporter

    project = Project.from_path2(project_path)

    output_path = output_path or os.getenv("LEKTOR_BUILD_OUTPUT_PATH") or project.get_output_path()

    from lektor_ng.environment import Environment

    env = Environment(project, load_plugins=False)

    # TODO re-instate load_plugins
    from ..pluginsystem import initialize_plugins

    initialize_plugins(env)

    with CliReporter(env, verbosity=verbosity):
        builds = ["first"]
        if watch:
            from lektor_ng.watcher import watch_project

            click.secho("Watching for file system changes", fg="cyan")
            builds = chain(builds, watch_project(env, output_path, raise_interrupt=False))

        success = False
        for _ in builds:
            builder = Builder(
                env.new_pad(),
                output_path,
                buildstate_path=buildstate_path,
                extra_flags=extra_flags,
            )
            if source_info_only:
                builder.update_all_source_infos()
                success = True
            else:
                failures = builder.build_all()
                if prune:
                    builder.prune()
                success = failures == 0

        return sys.exit(0 if success else 1)


if __name__ == "__main__":
    main()
