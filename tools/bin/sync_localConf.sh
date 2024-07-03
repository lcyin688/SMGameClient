#!/bin/bash

cd $(dirname $0)

source ./branch.svn

# 本地路径
ROOT_PATH=../..
CONF_PATH=${ROOT_PATH}/assets/resources/config/
BAT_PATH=${ROOT_PATH}/assets/Script/battle/config/
PROTO_PATH=${ROOT_PATH}/assets/resources/proto/
PLAN_PATH=${ROOT_PATH}/../x1_plan/

# 分支
BRANCH=$(git branch | grep \* | awk '{print $2}')
# BRANCH=master

BRANCH_NAME=配置_$BRANCH
echo $BRANCH_NAME

rm -rf ${CONF_PATH}/*.txt
cp -r ${PLAN_PATH}/${BRANCH_NAME}/csv/* ${CONF_PATH}

./libs/lua/lua54.exe gen_conf.lua
