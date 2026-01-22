# Resolving Lag, Timeout, and API Endpoint Issues

We are addressing three main issues:
1.  **Crash/Timeout**: Due to missing `apiEndpoint` and lack of fallback. (Partially addressed with debug logs).
2.  **Lag**: Caused by multiple concurrent reCAPTCHA solves and hardware simulations in a single browser window when batching tasks.
3.  **Silent Failures**: Errors returning `{}` instead of descriptive messages.

## User Review Required

> [!IMPORTANT]
> I will be implementing a **serial queue** for reCAPTCHA solves. This means if you start 20 videos, they will solve reCAPTCHA one by one. This will prevent "Lag" but might make the *start* of a large batch look slower. However, it will be much more stable.

## Proposed Changes

### [tokenManager.js]
- [MODIFY] **Atomic Recovery Lock**: Set `isRecovering = true` as the absolute first line of `automatedRecovery` to prevent parallel entry.
- [NEW] **Generation Lock (Smart Overlap)**:
    - If a task finishes, enforce a **5-second rest** before the next task.
    - If a task is still running, wait a **maximum of 30 seconds** since it started before allowing a new task to overlap.
- [MODIFY] **acquireGenerationLock**: Implement time-based checks for both start-time (30s max) and finish-time (5s post-success).

### [flowVideo.js] & [flowImage.js]
- [MODIFY] **Task Serialization**: Wrap generation logic in the account's smart generation lock.
- [MODIFY] **Error-Aware Polling**: Maintain RECOVERY_IN_PROGRESS wait logic.

---

### [Component] Token Management (tokenManager.js)

#### [MODIFY] [tokenManager.js](file:///d:/14012026Veo%20Automation%20Setup%201.2.1/$PLUGINSDIR/Filegocdeupdate/Veo%20Automation/resources/app/dist-electron/services/tokenManager.js)

- **Serial Queue for reCAPTCHA**: Add a lock (Semaphore) to `getRecaptchaToken` to ensure only one solve occurs at a time per account.
- **Hardware Simulation Cleanup**: Refactor hardware simulation to be less intensive during concurrent calls.
- **Improved Error Catching**: Ensure `mimicApiCall` returns more descriptive objects on timeout.

---

### [Component] Video Service (flowVideo.js)

#### [MODIFY] [flowVideo.js](file:///d:/14012026Veo%20Automation%20Setup%201.2.1/$PLUGINSDIR/Filegocdeupdate/Veo%20Automation/resources/app/dist-electron/services/flowVideo.js)

- **Detailed Logging**: Add more descriptive logs for each stage (reCAPTCHA, API Send, API Response).
- **Endpoint Fallback**: Finalize the robust fallback for `apiEndpoint`.

---

### [Component] Image Service (flowImage.js / flowImageUpscale.js)

#### [MODIFY] [flowImage.js](file:///d:/14012026Veo%20Automation%20Setup%201.2.1/$PLUGINSDIR/Filegocdeupdate/Veo%20Automation/resources/app/dist-electron/services/flowImage.js)
#### [MODIFY] [flowImageUpscale.js](file:///d:/14012026Veo%20Automation%20Setup%201.2.1/$PLUGINSDIR/Filegocdeupdate/Veo%20Automation/resources/app/dist-electron/services/flowImageUpscale.js)

- **Consistent Error Reporting**: Apply the same detailed error reporting logic.

## Verification Plan

### Manual Verification
1.  Run a batch of 5+ videos.
2.  Observed the logs for `[TokenManager] Waiting for active reCAPTCHA solve...`.
3.  Verify that tasks no longer "Lag" the entire app UI.
4.  Verify that errors (if any) show descriptive text in the UI/Logs.
etConfig`.
4. Verify if the defensive check prevents the crash and allows the operation to proceed (or shows a more helpful error).
