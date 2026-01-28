# JSON Cookies Import Feature - Walkthrough

## Changes Made

### 1. tokenManager.js - New Methods Added

Added two methods to TokenManager class:

- **`fetchTokenFromCookie(cookieString)`** - Fetches bearer token from `labs.google/fx/api/auth/session` using provided cookie string
- **`addAccountFromCookie(cookieJsonString)`** - Parses JSON cookies from browser extension, filters labs.google domain, fetches token, saves to electron-store

### 2. cookieIpc.js - New IPC Handler

Created new file with IPC handler:
```javascript
ipcMain.handle('auth:add-from-cookie', async (event, { cookieJson, accountIndex = 1 }) => {
    const tm = getTokenManager(accountIndex);
    return await tm.addAccountFromCookie(cookieJson);
});
```

## Files Modified
- `tokenManager.js` - Added 100+ lines for cookie import functionality
- `cookieIpc.js` - New file with IPC handler

## Issue Encountered
The main.js injection duplicated content due to obfuscation. User needs to:
1. Restore `main.js` from `main.js.backup`
2. Add at end of file: `require('./cookieIpc');`

## Usage
From renderer, call:
```javascript
const result = await window.api.invoke('auth:add-from-cookie', {
    cookieJson: '[{"name":"...", "value":"...", "domain":".labs.google"}]',
    accountIndex: 1
});
```

## Login Persistence Fix

### Issue
App repeatedly opened browser window for login during generation, even when tokens were valid. Caused by strict checks in `tokenManager.js` forcing window initialization.

### Fix Implementation
Modified `tokenManager.js` to mirror `veoapp.asar` logic:
1.  **`ensureValidCredentials()`**: Now checks for stored token/cookie first. If present, **returns immediately without opening/initializing window**.
2.  **`login()`**: If credentials exist, returns without calling `window.show()`.
3.  **Result**: `flowImage.js` and `flowVideo.js` use `axios` with stored tokens silently. Window only opens if tokens are missing or invalidated (403 error).

### Main.js Restoration
Automatically restored `main.js` from backup and appended the required `cookieIpc` loader to ensure clean state and functionality.


## Hidden Recovery Mode
Enforced strict background execution for recovery:
- utomatedRecovery now aggressively checks if it should be hidden and calls window.hide() if it accidentally appears.
- Replaced minimize() with hide() for cleaner background operation.
- Ensures the 'Flow' window does not pop up during generation.


### Account Manager UI
Integrated a floating 'Account Manager' (Gear Icon) button into the application:
 - **Location**: Fixed at bottom-right corner.
 - **Features**:
   - **Login (Pass)**: Standard email/password login.
   - **Login (Cookie)**: Import JSON cookies (Array format) directly.
 - **Implementation**: Injected custom-ui.js into build; connects to uth:login and uth:add-from-cookie IPCs.
