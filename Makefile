RED    = \033[31m
GREEN  = \033[32m
YELLOW = \033[33m
BLUE   = \033[34m
CLR  = \033[0m

# self-documentation magic: http://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
help: ## Display the list of available targets
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'


.PHONY: tests
tests:  ## run all tests
	@uv run pytest -vvs tests


.PHONY: tests-all
tests-all:  ## run all tests (slow+internet)
	@uv run pytest -vvs tests


.PHONY: lint
lint:  ## run all formatter/lint
	@uv run ruff format src tests
	@uv run ruff check --fix src tests
