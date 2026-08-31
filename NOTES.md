## TODO

- in lektor_ng/cli/build.py re-instate load_plugins

## Internals

### rendering page
```
contents.lr file
    ↓
Database.load_raw_data() → metaformat.tokenize()
    ↓
Raw dict data
    ↓
Pad.instance_from_data() → Datamodel.process_raw_data()
    ↓
Page/Record object (this)
    ↓
PageBuildProgram.build_artifact()
    ↓
artifact.render_template_into()
    ↓
Environment.render_template() → Jinja2 render
    ↓
HTML output file
```


## Commands

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
