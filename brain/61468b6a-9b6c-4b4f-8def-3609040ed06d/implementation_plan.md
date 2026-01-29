# Analyze Veo Automation Backend and License Logic

This plan outlines the steps for fully analyzing the backend communication and license verification logic of the Veo Automation application.

## Proposed Steps

### 1. String De-obfuscation
- Extract the `_0xadce` array constructor and the `_0x2025` decoder from `main.js`.
- Create a utility script to decode all obfuscated strings in the `licenseManager` and related modules.
- Identify dynamic properties such as `apiEndpoint` and `SECRET_CONFIG` keys.

### 2. IPC Channel Mapping
- Map the IPC channels identified in `preload.js` (e.g., `verifyLicense`, `checkSavedLicense`) to their actual handlers in `main.js`.
- Document the request/response structure for each critical IPC call.

### 3. Backend Endpoint Verification
- Analyze how `LICENSE_API_URL` (Google Apps Script) is used.
- Identify the secondary `apiEndpoint` returned by the server upon successful license verification.
- Search for any other hardcoded endpoints (e.g., Supabase, Firebase) in the de-obfuscated code.

## Verification Plan

### Automated Research
- Run a Node.js script to decode the identified strings and print the mappings.
- Use `grep` or similar tools to verify the presence of de-obfuscated strings in the source code context.

### Manual Verification
- Verify the Google Apps Script URL manually (if possible) to see the expected response format.
- Document the logic flow in a final report to the user.
