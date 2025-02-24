#!/bin/bash

cd $(dirname $0)

node js/sync_conf.js
# 分支
# BRANCH=$(git branch | grep \* | awk '{print $2}')
# echo $BRANCH

#node js/sync_conf.js $BRANCH
