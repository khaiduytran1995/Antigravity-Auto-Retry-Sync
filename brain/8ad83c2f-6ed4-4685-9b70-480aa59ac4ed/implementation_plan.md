# Implementation Plan: Supabase Migration for License Management

Migrate the License Manager GUI application and key generation scripts from WooCommerce API to Supabase REST API, mirroring the logic used in version 2.0.8.

## User Review Required

> [!IMPORTANT]
> This change will permanently switch the application to use your Supabase instance. Ensure you have backed up any necessary data from the WooCommerce server if needed.

## Proposed Changes

### [License Manager App]

#### [MODIFY] [LicenseManagerApp.py](file:///D:/VideoAIStudio_Installer_v2.0.2/LicenseManagerApp.py)
- Update `DEFAULT_CONFIG` with Supabase URL, Anon Key, and Service Key.
- Refactor `LicenseAPI` class:
  - Implement Supabase REST API integration using `requests`.
  - Update `get_all_licenses` to fetch from `veo_licenses` table.
  - Update `create_license` to insert into `veo_licenses` table using correct schema.
  - Update `update_license` (Edit) to use Supabase `PATCH` request.
  - Update `delete_license` to use Supabase `DELETE` request.
- Update UI mapping to match Supabase field names:
  - `licenseKey` -> `license_key`
  - `timesActivatedMax` -> `max_devices`
  - `expiresAt` -> `expires_at`
  - `status` (string mapping instead of IDs if necessary)

---

### [CLI Tools]

#### [MODIFY] [create_license_keys.py](file:///D:/VideoAIStudio_Installer_v2.0.2/create_license_keys.py)
- Update configuration to use Supabase.
- Update `create_license_via_api` to use Supabase `POST` request.

---

### [Configuration]

#### [NEW] [supabase_config.json](file:///D:/VideoAIStudio_Installer_v2.0.2/supabase_config.json)
- Store Supabase credentials securely.

## Verification Plan

### Automated Tests
1. **Supabase CRUD Test**:
   - Create a script `test_supabase_crud.py` to:
     - Create a test license.
     - Verify it exists in Supabase.
     - Update its status.
     - Delete it.
   - Run: `python test_supabase_crud.py`

2. **Integration Test**:
   - Run the modified `LicenseManagerApp.py`.
   - Verify all tabs load data from Supabase.
   - Test "Create License" and verify it appears in the list.
   - Test "Batch Create" and monitor progress.

### Manual Verification
1. Open the [Supabase Dashboard](https://supabase.com/dashboard) and verify that the `veo_licenses` table reflects the changes made through the app.
2. Launch the app and perform a test activation (if possible) using a newly created key.
