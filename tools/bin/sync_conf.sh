#!/bin/bash

cd $(dirname $0)

source ./branch.svn

# 本地路径
ROOT_PATH=../../
CONF_PATH=${ROOT_PATH}/assets/resources/config/
BAT_PATH=${ROOT_PATH}/assets/Script/battle/
PROTO_PATH=${ROOT_PATH}/assets/resources/proto/

# 分支
BRANCH=$(git branch | grep \* | awk '{print $2}')
# BRANCH=master

# 更新配置
rm -rf ${CONF_PATH}/*.txt
svn export --username $SVN_USER --password $SVN_PWD --force "${SVN_GAMEDATA_URL}_${BRANCH}/csv/" ${CONF_PATH} > /dev/null

# 更新协议
rm -rf ${PROTO_PATH}/*.ts
rm ${ROOT_PATH}/gameproto.d.ts
svn export --username $SVN_USER --password $SVN_PWD --force "${SVN_SHARED_URL}/${BRANCH}/client/" ${PROTO_PATH}/ > /dev/null
mv ${PROTO_PATH}/gameproto.d.ts ${ROOT_PATH}


./libs/lua/lua54.exe gen_conf.lua


# node ./js/genErrDesc.js ${ROOT_PATH}
