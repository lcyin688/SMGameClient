#!/bin/bash

cd $(dirname $0)

# 本地路径
ROOT_PATH=../..
BAT_PATH=${ROOT_PATH}/assets/Script/battle
SHARED_PATH=${ROOT_PATH}/../x1_shared

# 分支
BRANCH=$(git branch | grep \* | awk '{print $2}')

# svn更新
svn revert ${SHARED_PATH}/${BRANCH}
svn update ${SHARED_PATH}/${BRANCH}

# 拷贝
svn rm ${SHARED_PATH}/${BRANCH}/calcbattle
cp -r ${BAT_PATH} ${SHARED_PATH}/${BRANCH}/calcbattle
rm ${SHARED_PATH}/${BRANCH}/calcbattle/*.meta
cp ${ROOT_PATH}/csv.d.ts ${SHARED_PATH}/${BRANCH}/calcbattle/
cp ${ROOT_PATH}/gameproto.d.ts ${SHARED_PATH}/${BRANCH}/calcbattle/

# 提交
svn add ${SHARED_PATH}/${BRANCH}/calcbattle
svn commit -m "bat" ${SHARED_PATH}/${BRANCH}
