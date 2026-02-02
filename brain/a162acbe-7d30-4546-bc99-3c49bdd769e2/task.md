# Task: Replace HWID License with Supabase Login & Fixes

## Planning
- [x] Analyze current license check flow in app.asar
- [x] Identify files/functions to modify
- [x] Create implementation plan

## Implementation (REST API approach)
- [x] Rewrite Supabase handlers using REST API with fetch
- [x] Remove SDK dependency
- [x] Extract original 1.2.9 `app.asar`
[x] Merge Supabase configuration into 1.2.9 `_index.js`
[x] Fix syntax errors in `_index.js`
[x] Patch main process entry point (`index.js`)
[x] Integrate 1.2.8 preload script into 1.2.9
[x] Patch renderer JS bundle with Supabase Login UI
[x] Repack and verify 1.2.9 + Sora logic preservation
"Remember Me" logic
- [x] Bypass Subscription Check (days: 99999)

## Debugging & Fixes
- [x] Fix Session Capture (Refresh browser page)
- [x] Fix "Fetch Failed" in 1.2.9 (Resulted from caching)
  - [x] Rename renderer JS bundle
  - [x] Update index.html
  - [x] Disable `app.asar.unpacked`
- [x] Aling Preload API with 1.2.9 Renderer (Fix "Start All")
  - [x] Standardize `sora` method names (`loadStyles`, `onTokenPoolProgress`, etc.)
  - [x] Standardize `flow` method names (`startImageQueue`, `stopQueue`)
- [x] Add Debug Logs

## Rebranding & UI Redesign (KD-Sora2)
- [x] Rename all instances of "FastSora" to "KD-Sora2"
  - [x] Update `package.json` and main process
  - [x] Update renderer process text
- [x] Implement Neon Futurism UI Redesign
  - [x] Add 7-color gradients and glowing neon effects
  - [x] Add futuristic hover effects to buttons
  - [x] Enhance background and typography

## Verification
- [ ] Test login flow (1.2.9 - Pending User Confirmation)
- [ ] Verify rebranding in all views
- [ ] Verify UI aesthetics and animations
