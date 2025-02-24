#!/bin/bash
# 没有 protoJs 文件夹的时候创建
DIR_PATH="./protoTsJs"
mkdir -p "$DIR_PATH"

#示例===>将所有proto合并到ProtoTsJs文件夹下一个整体的protojs文件
pbjs -t static-module -w commonjs -o "$DIR_PATH"/proto.js *.proto

sleep 1
#示例===>将所有proto合并到ProtoTsJs文件夹下一个整体的proto.d.ts文件
pbts -o "$DIR_PATH"/proto.d.ts "$DIR_PATH"/proto.js
