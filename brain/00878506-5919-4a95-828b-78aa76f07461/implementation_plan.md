# Fix Login Persistence + Add JSON Cookies Feature

## Problem
1. App keeps asking for login even though user is already logged in
2. Error "reply was never sent" - IPC failure
3. Need JSON Cookies import feature like veoapp.asar

## Root Cause Analysis
- Current `flowVideo.js` and `flowImage.js` rely on `tokenManager.getCookie()` and `tokenManager.getProjectId()` which may NOT be captured properly
- The app uses `mimicApiCall` via Electron browser which causes IPC failures
- The axios refactor is correct but still uses session data from tokenManager which is missing

## Solution

### 1. Add IPC Handler for JSON Cookie Import
Add to `main.js`:
```javascript
ipcMain.handle('auth:add-from-cookie', async (event, cookieJson) => {
  // Parse JSON, validate, fetch token, store in electron-store
});
```

### 2. Add fetchTokenFromCookie Function
In `tokenManager.js`:
- Use HTTPS request to `labs.google/fx/api/auth/session`
- Extract token and email from JSON response
- Store in electron-store

### 3. Fix Session Storage
- When user logs in successfully, ENSURE cookie and token are SAVED to electron-store
- On app start, try to use stored credentials BEFORE forcing login
 
### 4. Fix Recovery Window Visibility
- Ensure `automatedRecovery` respects `isExplicit` flag
- Force `show: false` for background recovery attempts
- Prevent `tokenManager` from showing window unless explicitly requested


## Verification Plan
1. Import JSON cookies from browser extension
2. Test flow generation without login prompt
