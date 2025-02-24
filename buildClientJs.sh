#!/bin/bash
# 没有 protoJs 文件夹的时候创建
DIR_PATH="./protoJs"
mkdir -p ${DIR_PATH}

#在 protoJs下生成 petskill.js
pbjs -t static-module -w commonjs -o ${DIR_PATH}/petskill.js ./pb/petskill.proto

#在 protoJs下生成 player.js
pbjs -t static-module -w commonjs -o ${DIR_PATH}/player.js ./pb/player.proto
