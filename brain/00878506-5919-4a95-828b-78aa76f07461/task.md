# JSON Cookies Import + Login Persistence Fix

- [x] Add fetchTokenFromCookie to tokenManager.js
- [x] Add addAccountFromCookie to tokenManager.js  
- [x] Create cookieIpc.js with auth:add-from-cookie handler
- [x] Analyze `veoapp.asar` logic (confirmed `getAccountCredentials` has no expiry check)
- [x] Modify `tokenManager.js` (Target App)
    - [x] Update `login()` to check stored token first
    - [x] Implement `getAccountCredentials`-like logic
    - [x] Ensure `lastRefresh` is handled correctly
- [x] Verify `main.js` handlers use the new logic
- [x] Test generation flow (Logic verified: Axois -> Success / 403 -> Recovery)

# Fix Hidden Recovery & Window Visibility
- [x] Debug why `automatedRecovery` shows window even when `isExplicit` is false (Added check to hide if visible)
- [x] Verify `isExplicitRecovery` state management
- [x] Ensure `veoapp.asar` behavior (hidden background recovery) is replicated

- [x] Ensure `veoapp.asar` behavior (hidden background recovery) is replicated

# Implement JSON Cookie UI
- [x] Analyze `index.html` structure
- [x] Add "Add Account" (Email/Pass) Modal
- [x] Add "Add Account (Cookie)" Modal
- [x] Connect Modals to IPC handlers (`auth:add-from-cookie`, `auth:login`)
