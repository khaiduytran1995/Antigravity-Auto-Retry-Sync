# AutoVeo3Sub Bypass Project

## Completed
- [x] Extract and analyze AutoVeo3Sub.exe
- [x] Identify server endpoints (`api.aivideoz.top` ONLY)
- [x] Analyze API request/response format via string extraction
- [x] Create Simple_Bypass.py (auth → VIP, cookies → proxy)

## In Progress
- [/] Test cookie allocation proxy to real server

## Key Findings
- App uses ONLY `api.aivideoz.top` (NOT `api.autoveo3.com`)
- Subscription fields: `plan`, `status`, `daily_limit`, `max_cookies`
- Cookie server real IP: `163.223.13.101`
