#!/usr/bin/env bash

# params validation
if [[ -z "$1" ]]; then
  echo "Tag is empty"
  exit 1git@github.com:ripio/
fi

yarn upgrade rcn-diaspore-artifacts@git://github.com/ripio/rcn-diaspore-contract-artifacts.git#$1
yarn pre_build && yarn build
git add --all && git commit -m "ts generated from rcn-diaspore-contract-artifacts#$1" && git tag -a $1 -m "automatic release from rcn-diaspore-contract-artifacts#$1"

echo "\nTypescripts successfully created...