# KD-Sora2 Patch Walkthrough (v1.2.9 Original)

## Summary

Rebranded to **KD-Sora2**, replaced HWID license with Supabase authentication, and implemented a futuristic Neon UI redesign with 7-color gradients.

## Surgical Patch (v1.2.9 - Logic Preserved)

In this iteration, we shifted from cloning v1.2.8 to a **surgical merge** into the original v1.2.9 codebase. This ensures that the **new Sora bypass logic** inside v1.2.9 is retained while the license system is replaced with Supabase.

### Changes Applied

1.  **Main Process (`_index.js`)**:
    *   Integrated `supabaseAuth` helper (REST API).
    *   Replaced `setupLicenseHandlers` with Supabase handlers.
    *   **Result**: 1.2.9 Sora logic + Supabase Authentication.

2.  **Preload Script**:
    *   Aligned IPC method names (`loadStyles`, `onTokenPoolProgress`, `startImageQueue`) with the 1.2.9 renderer's API expectations to fix the "Start All" button.

3.  **Renderer UI & Branding**:
    *   **Rebranding**: Renamed all instances of "FastSora" to **KD-Sora2**.
    *   **Neon Futurism**: Implemented a vibrant UI with 7-color neon gradients, glowing borders, and glassmorphism.
    *   **Future Effects**: Added high-tech scaling and pulsing glow effects to action buttons on hover.
    *   **Cache Fix**: Renamed bundle to `index-patched.js` and updated `index.html`.

### How to Verify

1.  Run **`FastSora_V129_Surgical.exe`**.
2.  Login with your Supabase credentials.
3.  Check the license status (should show **Lifetime**).
4.  Test video creation/Sora tasks to ensure the **v1.2.9 logic** is working as intended.

---

## 🚀 Key Features Added

1. **Supabase Login**: Replaces Activation Key system.
2. **Lifetime License**: Automatically grants verified users a lifetime license (`days: 99999`).
3. **Remember Me**: Persists credentials locally so you don't have to login every time.
4. **Session Recovery**: Auto-reconnects session on app launch.

---

## 🛠️ Changes Per Version

### v1.2.9 (Latest)

- **Main Process**: Patched to use REST API for Supabase (no SDK dependency).
- **Renderer**: Added "Recall Creds" checkbox and Login UI.
- **Cache Fix**: Renamed renderer bundle to `index-patched.js` and neutralized `app.asar.unpacked` to ensure new code execution.

### v1.2.8

- **Main Process**: Patched directly in `app.asar`.
- **Renderer**: Replaced HWID check with Login Form.

---

## 🔍 Visual Verification

1. **Login Screen**: You should see a Dark Mode login with "Remember Me" checkbox.
2. **License Status**: Upon login, it should say "Chào mừng! Hạn: Lifetime".
3. **Task Execution**: "Bắt đầu Tất cả" should trigger tasks without "License Expired" errors.

---

## ⚠️ Troubleshooting

**Issue**: App shows "fetch failed" or old License Check UI.
**Fix**:
1. Close FastSora completely.
2. Ensure `app.asar.unpacked` folder in resources is renamed or deleted.
3. Run `FastSora.exe` again.

**Issue**: Login fails with "Unknown Error".
**Fix**: Check your internet connection (Supabase requires online access).
