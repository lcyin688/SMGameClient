#!/bin/bash

cd $(dirname $0)


# 分支
BRANCH=$(git branch | grep \* | awk '{print $2}')
echo $BRANCH

node js/syncTTFWords.js $BRANCH

cd ../fontspider/demo/font-awesome

cp ./fonts/.font-spider/fzcsjt.ttf ./fonts/fzcsjt.ttf 

font-spider demo.html
cp ./fonts/fzcsjt.ttf ../../../../assets/resources/font/fzcsjt.ttf



