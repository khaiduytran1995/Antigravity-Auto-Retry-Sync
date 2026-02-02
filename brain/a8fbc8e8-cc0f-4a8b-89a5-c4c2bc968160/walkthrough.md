# Walkthrough: Discovered Keys and Endpoints

I have investigated the setup files and identified the following configuration details.

## Supabase Configuration
The application uses Supabase for its backend. The following keys were found in the `renderer` files:

- **Endpoint (URL)**: `https://gkhkerlxxoihfvgnexaq.supabase.co`
- **Anon Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdraGtlcmx4eG9paGZ2Z25leGFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcxMDM4MzQsImV4cCI6MjA4MjY3OTgzNH0.a8Pyk2IQN3hjcsLlSHGV6yUPwL2Usnv6DrVtFrD60HQ`

## Application Keys
The application includes an anti-bypass protection system with a secret unlock key:

- **XỎ key (Unlock Key)**: `KD2026UNLOCK`
- **Location**: Found in `index.html` of the extracted application (`out/renderer/index.html`).

## Support and Donation
- **Zalo Support Group**: [https://zalo.me/g/kyyyuo618](https://zalo.me/g/kyyyuo618)
- **Author**: TRẦN KHẢI DUY

## Verification
I verified these keys by searching through the extracted source code of the application. The main process and preload scripts are compiled to V8 bytecode (`.jsc`), but the renderer assets remain readable in plain text.
