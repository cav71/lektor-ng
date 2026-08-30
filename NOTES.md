## TODO

- in lektor_ng/cli/build.py re-instate load_plugins

## Internals

### Help

Old way:
```
PYTHONPATH=src python -m lektor_ng.cli.cli_old build --help
```

New way:
```
PYTHONPATH=src python -m lektor_ng.cli.build --help
```

### Build

Remember:
```
uv pip install ../../packages/lektor_local_debug/
```

Old way:
```
PYTHONPATH=src python -m lektor_ng.cli.cli_old --project ../../website build --output-path ../../build/site
```

New way:
```
PYTHONPATH=src python -m lektor_ng.cli.build ../../website --output-path ../../build/site
```


Running the server:
```
PYTHONPATH=src python -m lektor_ng.cli --project ../../website  server --output-path ../../build/site
```
src/lektor_ng/cli.py:server_cmd

src/lektor_ng/cli_utils.py:Context <- this is the initial context
