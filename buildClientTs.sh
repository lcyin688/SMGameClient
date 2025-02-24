#!/bin/bash
# 没有 protoJs 文件夹的时候创建
JSDIR_PATH="./protoJs"
TSDIR_PATH="./protoTs"
mkdir -p "$TSDIR_PATH"

#在 protoTs下生成 petskill.ts
pbts -o "$TSDIR_PATH"/petskill.d.ts "$JSDIR_PATH"/petskill.js

#在 protoTs下生成 player.ts
pbts -o "$TSDIR_PATH"/player.d.ts "$JSDIR_PATH"/player.js