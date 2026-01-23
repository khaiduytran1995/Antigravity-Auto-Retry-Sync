# Supabase License Integration Plan

## Goal
Connect Veo-Banana license verification to user's own Supabase database, allowing self-managed license keys.

---

## Proposed Changes

### [NEW] Supabase Table: `veo_licenses`

```sql
-- License keys table
CREATE TABLE veo_licenses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  license_key TEXT UNIQUE NOT NULL,
  hwid TEXT,
  status TEXT DEFAULT 'active',  -- active, expired, banned
  account_type TEXT DEFAULT 'VIP',
  expires_at TIMESTAMP WITH TIME ZONE,
  max_devices INT DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  note TEXT
);

-- Enable RLS
ALTER TABLE veo_licenses ENABLE ROW LEVEL SECURITY;

-- Allow anon to read for validation
CREATE POLICY "Allow public read" ON veo_licenses FOR SELECT USING (true);
```

---

### [MODIFY] [VIP_BYPASS_HTTP2202.py](file:///d:/18112026Veo-Banana-Pro2202/VIP_BYPASS_HTTP2202.py)

Update to check license keys against Supabase instead of always bypassing:

1. When app sends `/api/check_license` with a key
2. Query user's Supabase: `SELECT * FROM veo_licenses WHERE license_key = ?`
3. If found & active → Return VIP response
4. If not found → Return error (or use fallback cache for testing)

---

## Verification Plan

### Manual Testing
1. Add a test key to Supabase
2. Run bypass server
3. Enter the test key in app
4. Verify VIP status shows

---

## Questions

1. Do you want **any key** to work (bypass mode), or **only keys in Supabase** to work?
2. Should users be able to **bind HWID** (one device per key)?
