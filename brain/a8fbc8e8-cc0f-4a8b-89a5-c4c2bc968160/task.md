# Task: Check Keys and Endpoints

- [x] Search for keys and endpoints in the codebase <!-- id: 0 -->
  - [x] Check `extracted_app/package.json`
  - [x] Check `admin_tool/.env` (empty)
  - [x] Search for SORA/XỎ keys globally
  - [x] Check `renderer/index.html` (Found Supabase URL/Anon Key)
- [x] Verify Supabase configuration <!-- id: 1 -->
  - URL: `https://gkhkerlxxoihfvgnexaq.supabase.co`
  - Anon Key: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
- [/] Verify Backend/Endpoint configuration <!-- id: 2 -->
  - [x] Check `index.html` for `_0xKEY` in v1.1.0 (Found: `KD2026UNLOCK`)
  - [x] Search for `apiUrl`, `baseUrl`, or other endpoints in v1.1.0
  - [/] Search for v1.2.6 keys in `$PLUGINSDIR`
    - [x] Check `resources/app.asar` (binary, no plain text URL found yet)
    - [/] Search for encoded or obfuscated keys
- [ ] Report findings to user <!-- id: 3 -->
