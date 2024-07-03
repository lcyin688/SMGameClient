@echo off

%~d0
cd %~dp0

cd bin

sh sync_conf.sh
pause