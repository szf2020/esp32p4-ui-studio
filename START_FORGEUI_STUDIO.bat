@echo off
title ForgeUI Studio Launcher

echo.
echo ============================================================
echo                 FORGEUI STUDIO LAUNCHER
echo ============================================================
echo.
echo Starting:
echo   - ForgeUI Studio Dev Server
echo   - ForgeUI Export Bridge
echo   - Browser Preview
echo.
echo Please wait...
echo.

cd /d C:\ForgeUI\Projects\esp32p4-ui-studio\studio

REM ============================================================
REM START FORGEUI STUDIO DEV SERVER
REM ============================================================

echo [1/3] Starting ForgeUI Studio...
start "ForgeUI Studio" /min powershell -WindowStyle Minimized -Command "npm run dev"

timeout /t 2 >nul

REM ============================================================
REM START EXPORT BRIDGE
REM ============================================================

echo [2/3] Starting ForgeUI Export Bridge...
start "ForgeUI Bridge" /min powershell -WindowStyle Minimized -Command "node export-server.js"

timeout /t 2 >nul

REM ============================================================
REM OPEN BROWSER
REM ============================================================

echo [3/3] Opening browser...
start "" "http://localhost:3000"

echo.
echo ============================================================
echo ForgeUI Studio should now be running.
echo.
echo Studio:
echo   http://localhost:3000
echo.
echo PowerShell windows are running minimized.
echo Restore them from the taskbar if needed.
echo ============================================================
echo.