#!/bin/bash

cd $(dirname $0)


# 本地路径
ROOT_PATH=../..

node ./js/syncResource.js
node ./js/syncMLGRes.js