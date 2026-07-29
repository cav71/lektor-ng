#!/usr/bin/env python
# /// script
# dependencies = [
#   "distlib",
#   "httpx",
#   "pygithub",
#   "pyyaml",
# ]
# ///

from pathlib import Path
import re
import argparse
import json
import logging
import yaml
from pathlib import Path
from distlib.version import NormalizedVersion, UnsupportedVersionError
from github import Github

log = logging.getLogger(__name__)


def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument("-q", "--quiet", action="append_const", const=-1, dest="loglevel")
    parser.add_argument("-v", "--verbose", action="append_const", const=1, dest="loglevel")
    parser.add_argument("-c", "--cache", type=Path)
    parser.add_argument("workflow", type=Path)
    args = parser.parse_args()

    args.loglevel = max(min(sum(args.loglevel or [0]), 1), -1)
    logging.basicConfig(level={
        -1: logging.WARNING,
        0: logging.INFO,
        1: logging.DEBUG,
    }[args.loglevel])

    return args


def extract_actions(config):
    result = {}
    for job, jdata in config.get("jobs", {}).items():
        for index, step in enumerate(jdata.get("steps", [])):
            if uses := step.get("uses"):
                result[(job, index)] = uses
    return result


def fetch_gh_tags(gh: Github, config: dict, actions: dict) -> dict[str, list[str]]:
    result = {}
    for index in actions:
        if "@" not in (uses := config["jobs"][index[0]]["steps"][index[1]]["uses"]):
            continue
        repo = gh.get_repo(uses.partition("@")[0])
        log.debug("got repo %s", repo)
        tags = []
        for tag in repo.get_tags():
            if not re.search(r"^v\d", tag.name):
                log.info("skipping version: %s", tag.name)
                continue
            try:
                NormalizedVersion(tag.name[1:])
                tags.append(tag.name[1:])
            except UnsupportedVersionError:
                log.info("failed to parse version: %s", tag.name)
        result[repo.full_name] = tags
    return result


def main():
    args = parse_args()
    config = yaml.safe_load(args.workflow.read_text())
    actions = extract_actions(config)

    gh = Github()

    if not (args.cache and args.cache.exists()):
        repotags = fetch_gh_tags(gh, config, actions)

    if args.cache:
        if args.cache.exists():
            repotags = json.loads(args.cache.read_text())
        else:
            args.cache.write_text(json.dumps(repotags, indent=2))

    for repo in repotags:
        repotags[repo] = [
            NormalizedVersion(t) for t in repotags[repo]
            if re.search(r"^\d+$", t) or
            re.search(r"^\d+([.]0+)*$", t)
        ]
        repotags[repo].sort()

    for repo, tags in repotags.items():
        print(repo, tags[-1])



if __name__ == "__main__":
    main()
