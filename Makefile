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

pr-ready: fmt test

