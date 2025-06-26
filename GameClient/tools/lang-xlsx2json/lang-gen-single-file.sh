#!/bin/bash

# 生成 lobby 多语言
# npm run excel hall

# 生成 game 多语言
# npm run excel:game mahjong

# 类型: lobby|game
declare type
# 游戏类型配置
declare game_type_config_file
# 文件code
declare code

if [ $# -eq 2 ]; then
    type=$1
    code=$2
elif [ $# -eq 3 ]; then
    type=$1
    game_type_config_file=$2
    code=$3
else
    echo "错误: 参数个数应为2个或3个"
    exit 1
fi

code="$(tr '[:upper:]' '[:lower:]' <<<"${code}")"
code="$(tr '[:lower:]' '[:upper:]' <<<"${code:0:1}")${code:1}"
excel_file="../../../../../product/$type/config/lang/Language_$code.xlsx"

echo "excel_file=${excel_file}"
if [ -n "$game_type_config_file" ]; then
    echo "game_type_config_file=${game_type_config_file}"
fi

python3 XlxsToJson.py -f $excel_file -o ../../assets -c $game_type_config_file
