# AutoVeo3 Server Replacement - Vercel + Supabase

## Bước 1: Setup Supabase Database

Tạo bảng `users` trong Supabase với schema:

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  email TEXT,
  full_name TEXT,
  type_role TEXT DEFAULT 'VIP',
  display_name TEXT DEFAULT 'VIP User',
  is_active BOOLEAN DEFAULT true,
  permissions TEXT[] DEFAULT ARRAY['*'],
  openai_permission BOOLEAN DEFAULT true,
  clone_limit INTEGER DEFAULT 999999,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert test user
INSERT INTO users (username, password, email, full_name, type_role, display_name)
VALUES ('admin', 'admin123', 'admin@local.com', 'Administrator', 'ADMIN', 'Administrator');
```

---

## Bước 2: Tạo Vercel API

Tạo project với structure:
```
autoveo3-backend/
├── api/
│   └── auth/
│       ├── login.js
│       ├── verify-status.js
│       ├── profile.js
│       └── logout.js
├── package.json
└── vercel.json
```

---

## Bước 3: Patch EXE

Thay URL trong file extracted hoặc binary:
- Tìm: `https://back.sharefilecorel.com`
- Thay bằng: `https://your-app.vercel.app`

---

## Bước 4: Test

1. Chạy AutoVeo3.exe
2. Đăng nhập với username/password từ Supabase
3. Verify tier hiển thị đúng
