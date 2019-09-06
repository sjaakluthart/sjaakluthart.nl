#!/bin/bash

BUILD_DIR=./build

cp -R src/assets build
npm run postcss

cat ${BUILD_DIR}/css/{meyer-reset.css,index.css} > bundle.css
rm -rf ${BUILD_DIR}/css/

cp src/index.html ${BUILD_DIR}/

CSS_HASH=$(shasum bundle.css | cut -b-10)
mv bundle.css ${BUILD_DIR}/bundle.${CSS_HASH}.css

sed -i -e s@%%CSS_HASH%%@${CSS_HASH}@ ${BUILD_DIR}/index.html
