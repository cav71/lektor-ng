import click

class Listener(click.ParamType):
    name = 'listener'

    def convert(self, value, param, ctx):
        if value.startswith('unix:'):
            return value[len('unix:'):]

        if value.isdigit():
            return ("127.0.0.1", int(value))

        if ":" in value:
            host, port = value.split(":")
            if port.isdigit():
                return (host, int(port))

        self.fail(f"{value!r} is not a socket, port, or host:port value", param, ctx)
