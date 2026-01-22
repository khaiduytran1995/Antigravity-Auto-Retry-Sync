# Restore Real Connection

The user wants the tool to use a real connection and not block hosts. This requires removing manual redirections from the `hosts` file and running the tool without the bypass proxy.

## Proposed Changes

### Configuration Scripts

#### [NEW] [RESTORE_CONNECTION.bat](file:///d:/chichbong_image/RESTORE_CONNECTION.bat)
A batch script that:
1. Checks for Administrator privileges.
2. Uses PowerShell to remove `api.chichbong.me` and `11labs.net` entries from the Windows `hosts` file.
3. Confirms completion to the user.

#### [NEW] [RUN_NORMAL.bat](file:///d:/chichbong_image/RUN_NORMAL.bat)
A simple batch script to launch `chichbong_generator.exe` directly, bypassing the `bypass_server.py`.

## Verification Plan

### Manual Verification
1. Run `RESTORE_CONNECTION.bat` as Administrator.
2. Verify that `api.chichbong.me` resolves to its real IP (e.g., via `ping` or `nslookup`).
3. Run `RUN_NORMAL.bat`.
4. Verify that the tool connects to the real backend and operates as expected (assuming a valid license is present or the real server is accessible).
