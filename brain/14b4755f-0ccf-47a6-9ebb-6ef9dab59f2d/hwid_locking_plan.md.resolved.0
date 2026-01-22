# HWID Locking for Supabase Accounts

To restrict use of a Supabase account to a single machine, we will bind the unique Hardware ID (HWID) to the user's Supabase metadata upon first login.

## Proposed Changes

### [Backend] [main.js](file:///d:/14012026Veo%20Automation%20Setup%201.2.1/$PLUGINSDIR/decompiled/dist-electron/main.js)
- Add IPC handler `license:get-machine-id` that utilizes the existing `licenseManager.getMachineId()` to return the hardware ID to the renderer.

### [Preload] [preload.js](file:///d:/14012026Veo%20Automation%20Setup%201.2.1/$PLUGINSDIR/decompiled/dist-electron/preload.js)
- Expose `getMachineId()` in the `electronAPI` context bridge.

### [Frontend] [index.html](file:///d:/14012026Veo%20Automation%20Setup%201.2.1/$PLUGINSDIR/decompiled/dist/index.html)
- Modify the inlined `handleLogin` function:
    1. Retrieve the machine ID using `window.electronAPI.getMachineId()`.
    2. After successful Supabase login, check the `user.user_metadata.machine_id`.
    3. **First-time binding**: If `user_metadata.machine_id` is empty, update the user metadata in Supabase with the current machine ID.
    4. **Validation**: If `user_metadata.machine_id` exists, compare it with the current machine ID.
    5. **Denial**: If the IDs do not match, immediately sign out the user, show a "Tài khoản này đã được kích hoạt trên máy khác" (This account is activated on another machine) error, and keep the app locked.

## Verification Plan

### Manual Verification
1. Login with a new account -> Should bind current HWID successfully.
2. Login with the same account on the same machine -> Should allow access.
3. Simulate a different HWID (by mocking the return value) -> Should deny access and show the error message.
