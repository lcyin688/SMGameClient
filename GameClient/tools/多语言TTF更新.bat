@echo off

%~d0
cd %~dp0

cd bin

sh syncLgWords.sh
pause