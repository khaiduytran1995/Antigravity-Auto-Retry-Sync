# Research Report: VeoGenAI-v4.0 Backend & Secrets

This report summarizes the research conducted on the `VeoGenAI-v4.0` application, focusing on identified secrets, backend endpoints, and its internal architecture.

## 🔑 Identified Secrets

The following sensitive information was found within the application's configuration and decompiled code:

### Application Configuration ([config.ini](file:///d:/VeoGenAI-v4.0/config/config.ini))
- **Gemini API Key**: `AIzaSyBJ7KZUTqN3l-aRUN3A6vytDwWN816cVFE`
- **Google Labs Token**: Starting with `ya29.a0...` (Short-lived OAuth Access Token)
- **Labs Project ID**: `86cb8f80-48d6-4643-b47e-f0c85ccf4579`
- **License Token**: A long RS256 JWT signed by HDMedia.

### Hardcoded Constants
- **Machine UUID**: `6DB1F5F3CE31BA5EA504B9E26CE46F86667EBE3F` (Found in tests and bypass scripts).
- **HDMedia Public Key**: used for JWT verification.
  ```text
  MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnJP1HWl2lM0Jpzld6EVK...
  ```

---

## 🌐 Backend Architecture

VeoGenAI-v4.0 operates as a **Local AI Proxy Server**.

### Internal Server
- **Port**: `3344`
- **Type**: Likely a FastAPI or Flask application bundled in `VeoGenAI.dll`.
- **Primary Endpoint**: `/api/license-token-info` — Used for validating the user's license.

### External AI Services
The application primarily communicates with Google's AI infrastructure:
- **Google Labs (Sora)**: `https://aisandbox-pa.googleapis.com/v1/video:...`
- **Google Gemini**: `https://generativelanguage.googleapis.com/`
- **Chrome Web Store Extension**: `google-labs-sora-token-ex` (Used to obtain tokens).

### License & Verification Flow
1. The app reads `license_token` from `config.ini`.
2. It validates the token's RS256 signature against the hardcoded HDMedia public key.
3. It checks if the `machine_id` in the JWT matches the local BIOS UUID (or the hardcoded `6DB1F5...` during testing).

---

## 🛠️ Bypass Mechanisms
Several scripts were found in the root directory that target the application's validation logic:
- [BYPASS_SERVER.py](file:///d:/VeoGenAI-v4.0/BYPASS_SERVER.py): A MITM server that intercepts `/api/license-token-info` and returns fake "enterprise" license data.
- [BYPASS_ALL_KEYS.py](file:///d:/VeoGenAI-v4.0/BYPASS_ALL_KEYS.py): A runtime patcher that replaces the hardcoded RSA public key in the extracted DLL to allow validation of custom-signed JWTs.

---

## 📂 Project Structure Insights
- `character/`: Contains character portraits used in the AI generation UI.
- `config/style.txt`: Defines prompt styles like "Pixar-like" or "Anime cinematic".
- `DECOMPILE_OUTPUT/`: Contains analysis results from previous reverse-engineering attempts.
