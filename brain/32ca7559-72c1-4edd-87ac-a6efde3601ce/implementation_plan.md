# UI Customization Implementation Plan

## Overview
Update visual elements and UI scripts in current app.asar to match app232old.asar design while keeping backend logic intact.

## Proposed Changes

### [MODIFY] [index.html](file:///d:/Auto%20Veo3%20v2.0%20Setup%202.2.0/Auto%20Veo3%20v2.0%20Setup%202.3.2/PublicNewSuperTooL%202.3.2/resources/app_current_ui/dist/index.html)

Will add the following custom UI enhancements:

#### 1. Title Update
- Change from: `AutoVeo - 0941280777`
- Change to: `PublicNewSuperTooL - https://zalo.me/g/kyyyuo618`

#### 2. Star Background Effect
Add animated starry background with 100 twinkling stars

#### 3. QR Donate Button
Floating button with modal showing donation QR code

#### 4. Rainbow Border Enhancement
Auto-detect red border elements and apply rainbow gradient animation

#### 5. Panel Swap
CSS-based layout swap moving sidebar from left to right using absolute positioning

#### 6. Custom API Key Input
Allow users to input their own Gemini API key for Clone feature with localStorage persistence

#### 7. Clone Authorization Bypass
Intercept fetch requests to:
- Mock `api/clone/usage` → return unlimited
- Mock `api/clone/get-key` → return custom key
- Mock `api/clone/report-usage` → always success
- Redirect `chat/completions` → Gemini API

## Verification Plan

### Manual Testing
1. Extract and modify index.html
2. Repack app.asar
3. Run application
4. Verify:
   - Star background appears
   - Donate button shows
   - Rainbow borders on red elements
   - Sidebar on right side
   - Clone feature works with custom API key
   - All backend functions unchanged
