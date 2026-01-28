# Implementation Plan - Port Supabase to New App Version

The goal is to port the working Supabase integration from an older version (`new232app.asar`) to a newer version (`app.asar`) of the Auto Veo3 application.

## User Review Required

> [!NOTE]
> This process involves unpacking and repacking Electron `asar` archives. This requires `node` and `npx` to be available. We are using `cmd /c` to bypass PowerShell script execution policies.

## Proposed Changes

### Extraction & Analysis
1.  Extract `new232app.asar` (Source) to a temporary folder `temp_source`.
2.  Extract `app.asar` (Target) to a temporary folder `temp_target`.
3.  Compare the directory structures and identify added files in Source (e.g., `supabaseClient.js`, `supabaseHandlers.js`).

### Porting Supabase Logic
#### [Supabase Client Files]
- Copy `supabaseClient.js` and any related helper files from `temp_source/dist-electron/` to `temp_target/dist-electron/`.

#### [Main Process Injection]
- Modify `temp_target/dist-electron/main.js`:
    - Inject `require` for Supabase client.
    - Replace/Patch `api:backendLogin`, `api:backendVerifyToken`, and `api:backendGetProfile` handlers with the logic found in `temp_source`.
    - Ensure any other IPC handlers related to Supabase are ported.

#### [Preload/Renderer]
- Check if `dist-electron/preload.mjs` or renderer files (in `dist/`) possess any changes. If so, apply them.

### Repacking
- Pack `temp_target` back to `app.asar`.

## Verification Plan

### Automated Verification
- None (Asar packing/unpacking is file manipulation).

### Manual Verification
- Launch the application `Auto Veo3 v2.0 Setup 2.3.2.exe` (or the relevant executable).
- Verify that the Login screen works and authenticates against Supabase.
- Check if the "Supabase hoạt động đầy đủ" (Supabase works fully) condition is met (Verify Token, Get Profile).
