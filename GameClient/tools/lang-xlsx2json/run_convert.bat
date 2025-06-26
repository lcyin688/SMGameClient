@echo off
chcp 65001

python3 XlxsToJson.py -D -d ../../../../../product/config/language/waka -o ../../assets  -c ../../assets/game/.gametype.config.json

pause