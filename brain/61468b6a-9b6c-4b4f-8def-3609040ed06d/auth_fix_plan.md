# Kế hoạch Sửa lỗi Auth/Cookies v1.3.0

## 🔍 Vấn đề phát hiện

### Chi tiết lỗi:
- **Triệu chứng**: Không lấy được cookies và token của tài khoản Google
- **Nguyên nhân**: v1.3.0 thiếu code export `getCookies` và các hàm liên quan

### So sánh v1.2.9 vs v1.3.0:

| Component | v1.2.9 | v1.3.0 | Status |
|-----------|--------|--------|--------|
| `require_cookies` | ✅ CÓ | ✅ CÓ | OK |
| `getCookies` export | ✅ CÓ | ❌ THIẾU | **LỖI** |
| `deleteCookie` | ✅ CÓ | ✅ CÓ | OK |
| `setCookie` | ✅ CÓ | ✅ CÓ | OK |
| Pattern `webContents` | 4 lần | 2 lần | Có thể liên quan |

---

## 📋 3 Phương án Khắc phục

### Phương án 1: Patch exports đơn giản ⚡
**Độ khó**: Thấp | **Thời gian**: 10 phút | **Rủi ro**: Trung bình

#### Thực hiện:
1. Tìm vị trí export trong v1.2.9
2. Copy đoạn code export vào v1.3.0
3. Repack và test

#### Ưu điểm:
- Nhanh chóng
- Ít thay đổi code

#### Nhược điểm:
- Có thể không đủ nếu cấu trúc auth đã thay đổi
- Có thể gây lỗi khác

---

### Phương án 2: Port toàn bộ auth module ✅ (KHUYẾN NGHỊ)
**Độ khó**: Trung bình | **Thời gian**: 30-45 phút | **Rủi ro**: Thấp

#### Thực hiện:
1. Extract toàn bộ auth/browser management từ v1.2.9
2. Tìm vị trí tương ứng trong v1.3.0
3. Thay thế hoàn toàn
4. Repack và test từng tính năng

#### Ưu điểm:
- An toàn nhất, giữ nguyên logic đã hoạt động
- Đảm bảo tính năng đầy đủ

#### Nhược điểm:
- Mất thời gian hơn
- Cần test kỹ

---

### Phương án 3: Copy file v1.2.9 sang v1.3.0 🔄
**Độ khó**: Rất thấp | **Thời gian**: 5 phút | **Rủi ro**: Cao

#### Thực hiện:
1. Copy `main.js` từ v1.2.9 sang v1.3.0
2. Chỉ giữ lại patch bypass license
3. Repack

#### Ưu điểm:
- Cực kỳ nhanh
- Chắc chắn auth hoạt động

#### Nhược điểm:
- Mất các feature/fix mới của v1.3.0
- Có thể gây lỗi tương thích

---

## 💡 Khuyến nghị

**Đề xuất: Phương án 2** vì:
- ✅ Đảm bảo auth hoạt động 100%
- ✅ Giữ lại các cải tiến của v1.3.0
- ✅ Rủi ro thấp nhất

---

## 🛠️ Bước triển khai (Phương án 2)

### Bước 1: Backup
```bash
copy main.js main.js.before-auth-fix
```

### Bước 2: Extract auth code từ v1.2.9
- Tìm các function: `loginGoogle`, `logoutGoogle`, `getCookies`
- Extract toàn bộ browser window handlers
- Lưu vào file temp

### Bước 3: Inject vào v1.3.0
- Tìm vị trí tương ứng trong v1.3.0
- Replace hoặc insert code
- Đảm bảo không conflict với bypass license

### Bước 4: Test
- Repack app.asar
- Test đăng nhập Google
- Test lấy cookies
- Test các tính năng khác

---

## ⏱️ Timeline

- Extract code: 10 phút
- Analyze & locate: 10 phút
- Inject code: 15 phút
- Test & fix: 10 phút

**Tổng**: ~45 phút
