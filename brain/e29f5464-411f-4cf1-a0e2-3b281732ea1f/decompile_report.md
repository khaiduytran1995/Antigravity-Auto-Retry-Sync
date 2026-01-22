# GiongAI.exe Decompile Report

## Tổng quan

Đã decompile toàn bộ source code của `giongai.exe` bao gồm:
- **538 files** từ `library.zip`
- **9 files** từ `lib/services/`
- **17 files** từ `lib/ui/`
- **8 files** từ `lib/utils/`

## Kết quả phân tích Server

### ❌ KHÔNG tìm thấy Supabase/Firebase

Đã scan toàn bộ codebase với các keyword:
- `supabase` → **0 kết quả**
- `firebase` → **0 kết quả**
- `appwrite` → **0 kết quả**
- `pocketbase` → **0 kết quả**

### ✅ Server duy nhất: `11labs.net`

| File | Server | Endpoints |
|------|--------|-----------|
| `api_service.pyc` | `https://11labs.net` | `/api/account/info`, `/api/license/verify`, `/api/resource/*` |
| `license_service.pyc` | `https://11labs.net` | `/api/license/verify_11labs.php`, `/api/license/activate_11labs.php` |
| `websocket_config_11labs.pyc` | `wss://api.11labs.net/` | WebSocket cho TTS |
| `activation_window.pyc` | `https://11labs.net` | `/api/license/create_payment.php`, `/api/license/check_payment_status.php` |
| `main_window.pyc` | `https://api.elevenlabs.io` | `/v1/shared-voices` (voice library) |

---

## Chi tiết các Endpoints

### License API
```
POST /api/license/verify_11labs.php
POST /api/license/activate_11labs.php
POST /api/license/activate
POST /api/license/change_email
```

### Account API
```
GET  /api/account/info
GET  /api/account/history.php
```

### Resource API
```
POST /api/resource/initial_allocation
POST /api/resource/refresh_resources
POST /api/resource/release
POST /api/resource/report
POST /api/resource/worker_refresh
POST /api/resource/get_new_proxy
POST /api/resource/report_proxy_issue
```

### Payment API
```
POST /api/payment/packages.php
POST /api/payment/create_order.php
GET  /api/license/check_payment_status.php?license_key=
```

### Voice API
```
POST /api/voice/check
```

### TTS Group API
```
POST /api/tts_group/get_group_info.php
POST /api/tts_group/add_group_member.php
POST /api/tts_group/remove_group_member.php
POST /api/tts_group/leave_group.php
```

---

## Branding System

Tool này là **multi-brand** - sử dụng chung codebase nhưng hiển thị tên/logo khác nhau:

| Brand ID | Tên hiển thị | Domain (chỉ download) |
|----------|--------------|------------------------|
| `elevenlabs` | 11Labs | 11labs.net |
| `giongai` | GiongAI | giongai.vn |
| `voice11go` | Voice11Go | voice11go.com |
| `nhanlyvoice` | NhanLy Voice | nhanlymmo.online |

**QUAN TRỌNG**: Tất cả các brand đều dùng chung API server `11labs.net`!

---

## Kết luận

1. **Server API duy nhất**: `https://11labs.net` (IP: `104.21.44.151`)
2. **WebSocket**: `wss://api.11labs.net/`
3. **Không có Supabase**: App KHÔNG sử dụng Supabase hay backend riêng nào khác
4. **GiongAI = ElevenLabs rebrand**: Chỉ khác tên/logo, cùng server

---

## Lý do không kết nối được

Có thể do:
1. **SSL Certificate không được trust** - App verify SSL cert
2. **Firewall/Antivirus block** - Port 443 bị chặn
3. **Hosts file conflict** - Có thể cần flush DNS cache
4. **App có thêm check khác** - Cần xem log chi tiết từ proxy
