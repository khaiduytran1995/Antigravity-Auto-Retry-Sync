# Plan: Check and Report Keys and Endpoints

I have investigated the setup files and extracted application code to find the requested keys and endpoints.

## Findings

### Supabase Configuration
- **Endpoint**: `https://gkhkerlxxoihfvgnexaq.supabase.co`
- **Anon Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdraGtlcmx4eG9paGZ2Z25leGFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcxMDM4MzQsImV4cCI6MjA4MjY3OTgzNH0.a8Pyk2IQN3hjcsLlSHGV6yUPwL2Usnv6DrVtFrD60HQ`

### Application Keys
- **XỎ key (Unlock Key)**: `KD2026UNLOCK`
  - Found in `index.html` under the anti-bypass protection system.

### Other Information
- **Zalo Support Group**: `https://zalo.me/g/kyyyuo618`
- **Donate QR**: `d:/sorabatchcreatevideo-1.1.0-setup/$PLUGINSDIR/resources/extracted_app/out/renderer/assets/donate_qr.jpg`

## Status
- [x] Identified Supabase URL and Anon Key.
- [x] Identified Unlock Key (XỎ key).
- [ ] searching for any other secret keys or backends (None found in plain text so far).

## Next Steps
- Report findings to the user.
