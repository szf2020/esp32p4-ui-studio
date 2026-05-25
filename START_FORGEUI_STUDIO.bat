@echo off

cd /d C:\ForgeUI\Projects\esp32p4-ui-studio\studio
start "ForgeUI Studio" powershell -NoExit -Command "npm run dev"

timeout /t 2 >nul

cd /d C:\ForgeUI\Projects\esp32p4-ui-studio\studio
start "ForgeUI Bridge" powershell -NoExit -Command "node export-server.js"

timeout /t 2 >nul

start "" "http://localhost:3000"