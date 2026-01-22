@echo off
chcp 65001 >nul
title Simple Tikdown V2 - Restore Original

echo ============================================
echo   Simple Tikdown V2 - Restore Original
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
set "ORIGINAL_FILE=%TARGET_DIR%\main.js"
set "BACKUP_FILE=%TARGET_DIR%\main.js.backup"

echo [INFO] Checking backup file...
echo.

:: Check if backup exists
if not exist "%BACKUP_FILE%" (
    echo [ERROR] Backup file not found: %BACKUP_FILE%
    echo.
    echo Cannot restore without backup. Please reinstall the application.
    pause
    exit /b 1
)

echo [INFO] Restoring original main.js...
copy /Y "%BACKUP_FILE%" "%ORIGINAL_FILE%" >nul
if %errorlevel% neq 0 (
    echo [ERROR] Failed to restore original!
    pause
    exit /b 1
)

echo.
echo ============================================
echo   [SUCCESS] Original restored!
echo ============================================
echo.
echo The application is now back to original state.
echo.
pause
