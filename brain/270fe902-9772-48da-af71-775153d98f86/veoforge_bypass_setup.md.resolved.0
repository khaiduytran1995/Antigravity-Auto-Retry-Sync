# VeoForge 3.4.0 Bypass - Hướng Dẫn Setup

> **Supabase URL:** `https://uuskxfqlfwszvojsbczw.supabase.co`

---

## Bước 1: Setup Database

1. Mở **Supabase Dashboard** → **SQL Editor**
2. Copy toàn bộ nội dung từ file:
   - [supabase_schema.sql](file:///d:/VeoForge-Setup-3.4.0/$PLUGINSDIR/resources/supabase_schema.sql)
3. Chạy SQL để tạo:
   - Tables: `licenses`, `account_veo3`, `captcha_keys`, `gemini_keys`, `pricing_config`, `usage_logs`
   - RPC Functions: `check_license`, `get_available_veo3_account`, `release_veo3_account`, etc.
   - Default VIP licenses: `VEOFORGE-VIP-2024`, `VEOFORGE-VIP-UNLIMITED`

---

## Bước 2: Lấy Anon Key

1. Supabase Dashboard → **Settings** → **API**
2. Copy **anon public** key (bắt đầu bằng `eyJ...`)

---

## Bước 3: Cập Nhật Anon Key Vào Code

Thay `YOUR_ANON_KEY_HERE` bằng anon key thực trong 2 file:

### File 1: [supabase/index.js](file:///d:/VeoForge-Setup-3.4.0/$PLUGINSDIR/resources/app_extracted/src/main/services/supabase/index.js)

```javascript
const BYPASS_ANON_KEY = 'eyJhbGciOiJS...YOUR_KEY_HERE';
```

### File 2: [license/index.js](file:///d:/VeoForge-Setup-3.4.0/$PLUGINSDIR/resources/app_extracted/src/main/services/license/index.js)

```javascript
const BYPASS_ANON_KEY = 'eyJhbGciOiJS...YOUR_KEY_HERE';
```

---

## Bước 4: Repack app.asar

```powershell
cd "d:\VeoForge-Setup-3.4.0\$PLUGINSDIR\resources"
npx asar pack app_extracted app.asar
```

---

## Bước 5: Chạy VeoForge

```powershell
cd "d:\VeoForge-Setup-3.4.0\$PLUGINSDIR"
.\VeoForge.exe
```

Sử dụng license key: `VEOFORGE-VIP-2024` hoặc `VEOFORGE-VIP-UNLIMITED`

---

## Bước 6: Thêm Resources (Tùy chọn)

### Thêm Veo3 Account

```sql
INSERT INTO account_veo3 (cookie, access_token, max_concurrent) VALUES
('your_veo3_cookie_here', 'optional_token', 5);
```

### Thêm Captcha Key

```sql
INSERT INTO captcha_keys (provider, api_key) VALUES
('yescaptcha', 'your_api_key'),
('capsolver', 'another_key');
```

### Thêm Gemini Key

```sql
INSERT INTO gemini_keys (api_key) VALUES
('your_gemini_api_key');
```

---

## Files Đã Patch

| File | Thay đổi |
|------|----------|
| [supabase/index.js](file:///d:/VeoForge-Setup-3.4.0/$PLUGINSDIR/resources/app_extracted/src/main/services/supabase/index.js) | Hardcode Supabase URL |
| [license/index.js](file:///d:/VeoForge-Setup-3.4.0/$PLUGINSDIR/resources/app_extracted/src/main/services/license/index.js) | Hardcode Supabase URL |

---

## Troubleshooting

| Vấn đề | Giải pháp |
|--------|-----------|
| "License server not configured" | Kiểm tra anon key đã được thêm vào code chưa |
| "License not found" | Chạy SQL để tạo license trong database |
| "Không có Veo3 account" | Thêm cookie vào bảng `account_veo3` |
| App không khởi động | Kiểm tra repack app.asar thành công |
