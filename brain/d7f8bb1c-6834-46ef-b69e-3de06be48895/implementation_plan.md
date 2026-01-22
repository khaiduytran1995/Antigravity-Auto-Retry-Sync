# Implementation Plan - Enable "Paid Custom" Feature

The goal is to enable the "Tùy Chỉnh (Trả Phí)" feature in Veo3. Analysis of the `adminhuyviet` user (who has this feature) reveals they have the `tool` role, not `admin`. We will update the bypass script to mimic this role and ensure all potential feature flags are set.

## Proposed Changes

### [BYPASS_V4.py](file:///D:/Veo3_BU_3012/BYPASS_V4.py)

#### [MODIFY] Update Role and Flags
- Change `role` from "admin" to **"tool"**.
- Keep `device_info` as "999" (to maintain high cookie limit).
- Add a comprehensive list of feature flags to `features_allowed` and the root of the response objects (users, subscriptions, activation_keys).
    - Flags to add: `tool_veo_3_unlimited`, `is_custom_integrate`, `custom_integrate`, `batch_job_custom`, `tuy_chinh_tra_phi`, `custom_paid`, `tool`, `is_lifetime`, `is_premium`, `is_ultra`, `is_enterprise`.

## Verification Plan

### Manual Verification
1.  Run `BYPASS_V4.py` as Administrator.
2.  Login with `admin` / `123456`.
3.  Check the "Batch Job" tab -> verify "Tùy Chỉnh (Trả Phí)" is visible and enabled.
4.  Check Cookie Manager -> verify limit is still 999.
