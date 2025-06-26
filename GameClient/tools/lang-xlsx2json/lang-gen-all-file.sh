#!/bin/bash

# 生成 lobby 多语言
# npm run excel:all

# 生成 game 多语言
# npm run excel:game:all

declare type
declare game_type_config_file

if [ $# -eq 1 ]; then
    type=$1
elif [ $# -eq 2 ]; then
    type=$1
    game_type_config_file=$2
else
    echo "错误: 参数个数应为1个或2个"
    exit 1
fi

python3 XlxsToJson.py -D -d ../../../../../product/$type/config/lang -o ../../assets -c $game_type_config_file
