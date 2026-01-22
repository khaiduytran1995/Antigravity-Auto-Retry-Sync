@echo off
chcp 65001 >nul
title Simple Tikdown V2 - License Bypass Patcher

echo ============================================
echo   Simple Tikdown V2 - License Bypass
echo ============================================
echo.

:: Check for admin rights
net session >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] This script requires Administrator privileges!
    echo.
    echo Right-click on this file and select "Run as administrator"
    pause
    exit /b 1
)

set "APP_DIR=C:\Program Files\Simple Tikdown V2"
set "TARGET_DIR=%APP_DIR%\resources\app.asar.unpacked\app"
set "BYPASS_FILE=%~dp0main_bypassed.js"
set "ORIGINAL_FILE=%TARGET_DIR%\main.js"
set "BACKUP_FILE=%TARGET_DIR%\main.js.backup"

echo [INFO] Checking files...
echo.

:: Check if bypass file exists
if not exist "%BYPASS_FILE%" (
    echo [ERROR] Bypass file not found: %BYPASS_FILE%
    echo.
    echo Make sure main_bypassed.js is in the same folder as this script.
    pause
    exit /b 1
)

:: Check if app directory exists
if not exist "%TARGET_DIR%" (
    echo [ERROR] Application not found: %TARGET_DIR%
    echo.
    echo Make sure Simple Tikdown V2 is installed.
    pause
    exit /b 1
)

:: Create backup if not exists
if not exist "%BACKUP_FILE%" (
    echo [INFO] Creating backup of original main.js...
    copy "%ORIGINAL_FILE%" "%BACKUP_FILE%" >nul
    if %errorlevel% neq 0 (
        echo [ERROR] Failed to create backup!
        pause
        exit /b 1
    )
    echo [OK] Backup created: main.js.backup
) else (
    echo [INFO] Backup already exists, skipping...
)

echo.
echo [INFO] Applying license bypass patch...
copy /Y "%BYPASS_FILE%" "%ORIGINAL_FILE%" >nul
if %errorlevel% neq 0 (
    echo [ERROR] Failed to apply patch!
    pause
    exit /b 1
)

echo.
echo ============================================
echo   [SUCCESS] License bypass applied!
echo ============================================
echo.
echo The application will now show VIP license with 365 days.
echo.
echo To restore original: Run RESTORE_ORIGINAL.bat
echo.
pause
