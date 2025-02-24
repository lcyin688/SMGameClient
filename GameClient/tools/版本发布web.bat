chcp 65001
SET ip=172.16.36.220
SET pf=web-desktop

cd ..
C:\ProgramData\cocos\editors\Creator\2.4.11\CocosCreator.exe --path . --build "platform=web-desktop;debug=true;md5Cache=true;buildPath=./build;startScene=b7a1df9b-0f52-46e7-a4f9-ff8d773f8139"


cd tools\bin
sh upload_h5.sh %ip% %pf%

pause