#!/bin/bash
set -e

NPM_PACKAGE=$(cat package.json | jq -r '.name')

TAG=next # change it back to dev when we are ready to publish to dev

npm version --preid $TAG --no-git-tag-version --no-commit-hooks prepatch
#Use timestamp as package suffix
TIME=$(date -u +%Y%m%d%H%M%S)
sed -i "/version/s/$TAG.0/$TAG.$TIME/g" package.json
PUBLISH_VERSION=$(cat package.json | jq -r '.version')
echo publishing $NPM_PACKAGE@$PUBLISH_VERSION

# disable husky
npm pkg delete scripts.prepare

npm publish --access public --tag $TAG
