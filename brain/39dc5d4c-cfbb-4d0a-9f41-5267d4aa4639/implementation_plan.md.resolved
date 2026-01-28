# Implementation Plan: Mock All Backend APIs

## Goal
Eliminate dependency on local server backend by mocking all API calls and storing data persistently.

---

## Strategy: IPC Mock Handlers

Instead of modifying the minified renderer code, we'll:
1. Create a **mock profiles service** in the Electron main process
2. Store profiles in a **JSON file** (persistent across restarts)
3. Mock all `/api/profiles/*` endpoints via IPC handlers

### Why JSON file instead of localStorage?
- Main process doesn't have access to localStorage (renderer only)
- JSON file in userData is more reliable and larger capacity
- Easy to backup/restore

---

## Proposed Changes

### [NEW] `mockProfilesService.js`
Location: `apps/electron/dist/main/mockProfilesService.js`

```javascript
// Mock profiles storage using JSON file
// Stores profiles in %APPDATA%/Veo3Studio/profiles.json
```

### [MODIFY] `ipcHandlers.js`
Add IPC handlers to intercept profile API calls:
- `profiles:list` → return all profiles from JSON
- `profiles:get` → get single profile by ID  
- `profiles:create` → create new profile
- `profiles:update` → update profile
- `profiles:delete` → delete profile

### [MODIFY] Renderer (if needed)
May need to modify how renderer calls API - either:
- Direct IPC calls instead of HTTP fetch
- Or keep HTTP but mock responses in main process

---

## Data Schema

```json
{
  "profiles": [
    {
      "id": "uuid",
      "name": "Profile Name",
      "email": "email@example.com",
      "cookies": "...",
      "proxyConfig": "host:port:user:pass",
      "accessToken": "...",
      "accessTokenExpires": "2026-01-27T00:00:00Z",
      "isActive": true,
      "createdAt": "2026-01-27T00:00:00Z",
      "updatedAt": "2026-01-27T00:00:00Z"
    }
  ]
}
```

---

## Verification Plan

1. Create a profile → check JSON file created
2. Restart app → check profile persists
3. Update profile → check JSON updated
4. Delete profile → check removed from JSON
5. Verify no server dependency errors

---

> [!IMPORTANT]
> This approach requires modifying how the renderer communicates with profiles.
> The renderer currently uses HTTP fetch to `localhost:{port}/api/profiles`.
> We need to either:
> - A) Intercept fetch calls in preload script
> - B) Start a minimal in-process HTTP server to handle API calls
> - C) Modify renderer to use IPC directly (complex due to minification)

**Recommended: Option B** - Start minimal mock HTTP server in main process
