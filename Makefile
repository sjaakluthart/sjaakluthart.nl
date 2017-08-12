BUILD_DIR=./build

default:
	@echo No target specified

clean:
	rm -rf $(BUILD_DIR)

build: clean
	mkdir $(BUILD_DIR)
	cp -R src/assets build
	npm run postcss
	cp src/index.html $(BUILD_DIR)

deploy: build
	npm run deploy
