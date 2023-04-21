#!/bin/bash
set -e

NPM_PACKAGE=$(cat package.json | jq -r '.name')

npm version --preid dev --no-git-tag-version --no-commit-hooks prepatch
#Use timestamp as package suffix
TIME=$(date -u +%Y%m%d%H%M%S)
sed -i "/version/s/dev.0/dev.$TIME/g" package.json
PUBLISH_VERSION=$(cat package.json | jq -r '.version')
echo publishing $NPM_PACKAGE@$PUBLISH_VERSION

# disable husky
npm pkg delete scripts.prepare

npm publish --access public --tag dev
