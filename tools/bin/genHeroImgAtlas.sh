#!/bin/bash

cd $(dirname $0)


# 本地路径
ROOT_PATH=../..
PLAN_PATH=${ROOT_PATH}/../x1_plan/

# 分支
BRANCH=$(git branch | grep \* | awk '{print $2}')
# BRANCH=master
BRANCH_NAME=配置_$BRANCH
echo $BRANCH_NAME

node ./js/genHeroImgAtlas.js ${PLAN_PATH}/${BRANCH_NAME}