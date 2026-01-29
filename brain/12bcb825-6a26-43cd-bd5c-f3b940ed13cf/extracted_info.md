# Extracted Information - Veo3 Video Auto

This document contains sensitive information and configuration keys found within the application files and bypass scripts.

### Version Comparison: Original vs. Patched

- **Original App Location:** `D:\Veo3.Video.Auto-Windows-2.0.1-Setup\$PLUGINSDIR\Veo3 Video Auto.exe`
- **Original app.asar Location:** `D:\Veo3.Video.Auto-Windows-2.0.1-Setup\$PLUGINSDIR\resources\app.asar`
- **Key Differences in `main-CvIVeGr7.js`:**
    - **Original:** ~400 KB (9,682 lines)
    - **Patched:** ~410 KB (10,750 lines)
    - **Added Logic:** The patched version contains approximately 1,000 extra lines dedicated to advanced video processing (merge, trim, upscale), FFmpeg binary management, and custom telemetry/logging.
- **Original Backend URL:** `https://veo3.sinhthanh.com` (Found in raw source code).

### Captured Credentials & Keys

| Item | Value | Source |
| :--- | :--- | :--- |
| **Supabase URL** | `https://gkhkerlxxoihfvgnexaq.supabase.co` | `Patch_AppAsar.py`, `index-DnZGMrbC.js` |
| **Supabase Anon Key** | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdraGtlcmx4eG9paGZ2Z25leXF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcxMDM4MzQsImV4cCI6MjA4MjY3OTgzNH0.a8Pyk2IQN3hjcsLlSHGV6yUPwL2Usnv6DrVtFrD60HQ` | `Patch_AppAsar.py` |
| **Backend Function** | `https://gkhkerlxxoihfvgnexaq.supabase.co/functions/v1/veo3-api` | `fix_url.py`, `index-DnZGMrbC.js` |
| **Local API Base** | `/api` | `index-DnZGMrbC.js` |
| **Site Token** | `54c6797c72f24ab8bce80ac728ccfff2` | `captured_responses.json` (Cloudflare Beacon) |

## Bypass Configuration

- **Target Host:** `veo3.sinhthanh.com`
- **Redirect Target:** `127.0.0.1` (via `hosts` file)
- **SSL Certificates:** Found in `certs/` directory (`server.crt`, `server.key`, `capture.crt`, `capture.key`).
- **Main Bypass Launcher:** `Imagen4_Bypass_Launcher.py` (Implements local HTTPS proxy).

## Hardware & License Examples (Captured)

- **Example Hardware ID:** `b3309f2f12869b56bc3f9ea8c1b0e060e48dfd988764af72befbff3766a8cfd7`
- **Example CPU ID:** `1d7c5edcec26eafd8ce78c9c15451091`
- **Example License Key:** `ELV-064e39eb-7b565707-f34e2495`

## System Prompt (DeepSeek)

Found a long system prompt used for rewriting prompts to avoid policy violations. It encourages personal information sanitization and figurative language. (Refer to `recorded_responses.json` line 139 for full text).

### Backend Communication & IPC

- **Deeplink Handler:** App handles `veo3app://` protocol. Function `Ed()` parses `accessToken`, `refreshToken`, and `deviceId` from the URL.
- **IPC Main Object:** `ye` (likely `ipcMain`).
- **Update Checking:** Function `qc()` uses `fetch` to `${e}/api/update/version`.
- **Backend URL Pattern:** `${e}/api/...` where `e` is the Supabase Edge Function URL.
- **Frontend Assets:** `index-DnZGMrbC.js` contains the UI logic and calls these IPC handlers.
- **Patched Functions:** `video:merge` is present in `main-CvIVeGr7.js`, handling FFmpeg-based video merging.
- **Hidden Data Source:** Found `.data` file (846,336 bytes) which is likely part of the original application's resource bundle or supplemental logic.

## Supabase Edge Function Analysis (`veo3-api`)

The custom backend is implemented as a single Supabase Edge Function that handles the following routes:

- **Auth (`/auth/login`, `/auth/register`):**
    - Returns a synthetic VIP user profile.
    - Generates high-entropy access and refresh tokens.
    - Provides a `BYPASS-VIP-KEY` license.
- **Account Info (`/account/info`):**
    - Returns a comprehensive state with `plan: "VIP"`, `total_credits: 999999`, and all VIP features enabled (`is_VIP_voice: 1`, `is_eleven_v3: 1`).
- **License Management (`/activate`, `/verify`):**
    - Always returns `success: true` and `status: "active"`.
- **Resource Reporting (`/counter`, `/report`):**
    - Echoes the successful count back to the application to maintain consistent UI reporting.
- **Version Control (`/update/version`):**
    - Returns `v1.0.0` to prevent mandatory updates that might break the bypass.

> [!NOTE]
> The application's security relies heavily on the backend's response format. By mimicking the original REST API structure, the bypass successfully overrides all feature gates.
