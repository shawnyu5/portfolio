define log
	@echo "=============> $(1)"
endef

help: ## Prints help for targets with comments
	@cat $(MAKEFILE_LIST) | grep -E '^[a-zA-Z_-]+:.*?## .*$$' | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'


fmt:
	$(call log,Formatting)
	prettier --write .

test:
	$(log,Testing)
	npm run headless-test

build:
	$(log,Building)
	npm run build

pr-ready: fmt test build

