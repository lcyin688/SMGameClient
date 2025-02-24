#!/bin/bash
DIR_OUTPATH="../Proto.js"
mkdir -p ${DIR_OUTPATH}
# 生成js 文件  
pbjs --dependency protobufjs/minimal.js --target static-module --wrap commonjs --out  ${DIR_OUTPATH}/proto.js ../Proto/*.proto
sleep 1
# 生成Ts 文件  
pbts --main --out ${DIR_OUTPATH}/proto.d.ts ${DIR_OUTPATH}/*.js
# 添加命名空间
sleep 1
echo "Adding namespace..."
pbts --main --out ${DIR_OUTPATH}/proto.d.ts ${DIR_OUTPATH}/*.js && node ./wrap-pbts-result.js
echo "生成协议protobuf 完成..."


# cocos 使用protobufjs 需要安装相关的依赖文件
npm i --save @protobufjs/aspromise  
@protobufjs/base64 
@protobufjs/codegen
@protobufjs/eventemitter
@protobufjs/fetch
@protobufjs/flot
@protobufjs/inquire 
@protobufjs/path  
@protobufjs/pool  
@protobufjs/utf8


