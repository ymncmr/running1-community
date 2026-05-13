@echo off
title Malmong Running Club - Local Server
echo.
echo  Starting Malmong Running Club website...
echo  Open your browser at: http://localhost:3000
echo.
powershell -ExecutionPolicy Bypass -File "%~dp0serve.ps1"
pause
