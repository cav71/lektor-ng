"""Dummy test plugin"""

from lektor_ng.pluginsystem import Plugin


class DummyPlugin(Plugin):
    """Dummy test plugin."""

    # pylint: disable=too-few-public-methods
    name = "dummy"
