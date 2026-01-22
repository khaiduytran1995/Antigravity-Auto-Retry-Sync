@echo off
chcp 65001 >nul
title Restore Hosts File

:: Check for admin rights
net session >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Run as Administrator!
    pause
    exit /b 1
)

echo [*] Restoring hosts file...

:: Create temp file without bypass entry
findstr /v "Tikdown Bypass" C:\Windows\System32\drivers\etc\hosts > "%TEMP%\hosts_clean.txt"
findstr /v "crm.alosoft.vn" "%TEMP%\hosts_clean.txt" > "%TEMP%\hosts_final.txt"
copy /Y "%TEMP%\hosts_final.txt" C:\Windows\System32\drivers\etc\hosts >nul

echo [+] Hosts file restored
echo [*] Flushing DNS...
ipconfig /flushdns >nul

echo.
echo [DONE] You can now use Simple Tikdown V2 normally.
pause
