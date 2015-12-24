GULP_CMD = node_modules/.bin/gulp

default:
	@echo No target specified

lint:
	$(GULP_CMD) lint

jscs:
	$(GULP_CMD) jscs

scss:
	$(GULP_CMD) scss
