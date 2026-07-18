import re
from collections import defaultdict
from pathlib import Path


def main():
    dirs = ["tests", "src/lektor_ng"]
    root = Path.cwd()
    changes = defaultdict(int)
    for subdir in dirs:
        for path in (root / subdir).rglob("*.py"):
            txt = path.read_text()
            result = []
            for line in path.read_text().split("\n"):
                if line.startswith("from lektor."):
                    changes[path] += 1
                    line = "from lektor_ng." + line[len("from lektor."):]
                result.append(line)
            if changes[path]:
                path.write_text("\n".join(result))


if __name__ == "__main__":
    main()
