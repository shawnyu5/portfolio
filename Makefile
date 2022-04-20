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

pr-ready: fmt test

