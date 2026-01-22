# Task: Story NextGen 2.0 Activation Bypass

## Phase 1: Analysis (Completed)
- [x] Explore directory structure
- [x] Identify backend endpoints (`hamy.io.vn`, `/x9m4k7/activate_secure.php`)
- [x] Identify encryption (AES-256-GCM, HMAC-SHA256, HWID-based keys)
- [x] Document findings

## Phase 2: Bypass Attempts (Completed)
- [x] Mock backend server - Failed (encryption mismatch)
- [x] Binary patching (blind) - Failed (wrong functions)
- [x] Hosts file redirect - Failed (HTTPS required)
- [x] Python runtime bypass - Failed (Nuitka bundles own Python)
- [x] Mitmproxy - Failed (SSL issues)

## Phase 3: IDA Pro Analysis (In Progress)
- [x] Configure IDA Python environment
- [x] Load `Story NextGen 2.0_Hamy.exe` in IDA
- [/] Execute `ida_complete_solution.py` script
  - [ ] Bypass activation window
  - [ ] Export decompiled source
  - [ ] Find secrets (API keys, encryption keys)
- [ ] Apply patches and save as cracked version

## Phase 4: Supabase Integration (New)
- [ ] Create license keys table on Supabase
- [ ] Create RPC function for license validation
- [ ] Patch binary URL to point to Supabase
- [ ] Test complete bypass
