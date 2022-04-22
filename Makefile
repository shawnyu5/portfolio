define log
	@echo "=============> $(1)"
endef

all:
	echo "hi"

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

