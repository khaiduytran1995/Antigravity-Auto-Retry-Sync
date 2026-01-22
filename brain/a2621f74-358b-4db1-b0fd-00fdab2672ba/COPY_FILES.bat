@echo off
chcp 65001 >nul
title Copy Bypass Files

:: Check for admin rights
net session >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Run as Administrator!
    pause
    exit /b 1
)

set "SRC=C:\Users\hp\.gemini\antigravity\brain\a2621f74-358b-4db1-b0fd-00fdab2672ba"
set "DST=C:\Program Files\Simple Tikdown V2"

echo Copying bypass files...
copy /Y "%SRC%\main_bypassed.js" "%DST%\"
copy /Y "%SRC%\APPLY_BYPASS.bat" "%DST%\"
copy /Y "%SRC%\RESTORE_ORIGINAL.bat" "%DST%\"

echo.
echo [DONE] Files copied to: %DST%
echo.
echo Now run APPLY_BYPASS.bat as Administrator to activate!
pause
