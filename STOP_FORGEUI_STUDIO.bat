@echo off
title Stop ForgeUI Studio

echo Stopping ForgeUI Studio...

taskkill /F /IM node.exe
taskkill /F /IM npm.cmd
taskkill /F /IM powershell.exe

echo Done.
pause