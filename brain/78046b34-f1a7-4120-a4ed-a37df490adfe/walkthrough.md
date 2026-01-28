# Veo Automation - Captcha Fix Walkthrough

## Problem
Image Generation (Banana PRO) fails with `PERMISSION_DENIED` error while Video Generation works correctly.

## Root Cause
**Action Parameter Mismatch** in the Selenium captcha service:

| Component | Action Used | Note |
|-----------|-------------|------|
| `SeleniumBrowserPool.js` | Hardcoded `VIDEO_GENERATION` | This was overriding all requests |
| `flowImage.js` | Passes `FLOW_GENERATION` | This is the **correct** action for Image API |
| `HybridRecaptchaService.js` | **Ignored** the action parameter | Prevented the fix from working |

The reCAPTCHA token was being generated with `VIDEO_GENERATION` action but the Image API expected `FLOW_GENERATION`.

**Comparison with working version (kinxapp):**
- `kinxapp` uses Puppeteer instead of Selenium.
- However, the **API Requirement** remains the same: Image Generation API requires a token created with `action: 'FLOW_GENERATION'`.
- Our fix aligns the Selenium implementation to satisfy this API requirement.

## Fix Applied

### 1. [SeleniumBrowserPool.js](file:///D:/14012026Veo%20Automation%20Setup%201.2.1/$PLUGINSDIR/resources/app/dist-electron/services/SeleniumBrowserPool.js)
```diff
-  async getToken(cookie) {
+  async getToken(cookie, action = null) {
+    const effectiveAction = action || SELENIUM_CONFIG.ACTION;
     ...
-    `, SELENIUM_CONFIG.SITE_KEY, SELENIUM_CONFIG.ACTION);
+    `, SELENIUM_CONFIG.SITE_KEY, effectiveAction);
```

### 2. [HybridRecaptchaService.js](file:///D:/14012026Veo%20Automation%20Setup%201.2.1/$PLUGINSDIR/resources/app/dist-electron/services/HybridRecaptchaService.js)
```diff
-  async getToken(cookie, action = 'submit') {
-    return this.pool.getToken(cookie);
+  async getToken(cookie, action = 'FLOW_GENERATION') {
+    console.log(`🔐 [RecaptchaService] getToken with action: ${action}`);
+    return this.pool.getToken(cookie, action);
   }
```

## Verification Checklist
- [x] `selenium-webdriver` installed in `node_modules`
- [x] `package.json` points to `resources/app/dist-electron/main.js`
- [x] `main.js` loads Selenium services before app
- [ ] **User test**: Run Image Generation to verify fix

## To Test
1. Launch `Veo Automation.exe`
2. Try creating an image with Banana PRO
3. Check console logs for `🔐 [RecaptchaService] getToken with action: FLOW_GENERATION`
4. Image generation should succeed without `PERMISSION_DENIED` error
