# Kế hoạch Port Tính năng mới từ moiapp.asar

## 🔍 Phân tích Hiện trạng

### App hiện tại (app/dist-electron/main.js):
| Feature | Status | Ghi chú |
|---------|--------|---------|
| `scene:create-video` | ✅ Có (2 occurrences) | Tạo video từ scene |
| `scene:create-image` | ❌ **THIẾU** | Cần port từ moiapp |
| `flow:generate-video` | ✅ Có (1 occurrence) | Tạo video từ flow |
| `flow:generate-image` | ✅ Có (1 occurrence) | Tạo ảnh từ flow |

### Vấn đề gặp phải:
- `moiapp.asar` không thể extract tự động do missing files trong `.unpacked`
- Cần phương án khác để truy cập code

---

## 📋 Các Phương án

### Phương án 1: Extract bằng 7-Zip ⚡
**Mô tả:** Dùng 7-Zip để extract moiapp.asar thủ công

**Các bước:**
1. Cài 7-Zip (nếu chưa có)
2. Chuột phải `moiapp.asar` → 7-Zip → Extract to "moiapp-extracted"
3. So sánh `moiapp-extracted/dist-electron/main.js` với `app/dist-electron/main.js`
4. Tìm và port code `scene:create-image`

**Thời gian:** ~15 phút

---

### Phương án 2: Tìm trong versions khác 🔍
**Mô tả:** Tìm code `scene:create-image` trong các versions đã extract trước đó

**Các bước:**
1. Kiểm tra v1.2.9 hoặc v1.3.0 có feature này không
2. Nếu có, port sang app
3. Nếu không, quay lại phương án 1

**Thời gian:** ~10 phút

---

### Phương án 3: Yêu cầu người dùng cung cấp code 💬
**Mô tả:** Hỏi user biết cụ thể features nào cần thêm

**Thời gian:** Tùy phản hồi

---

## 🎯 Cần làm rõ

1. **moiapp.asar có features mới gì cụ thể?**
   - scene:create-image?
   - image:generate?
   - Hay features khác?

2. **Có file moiapp đã extract sẵn chưa?**

3. **Có thể dùng 7-Zip không?**

---

## 💡 Khuyến nghị

**Ưu tiên:**
1. Kiểm tra v1.2.9/v1.3.0 có `scene:create-image` không (nhanh nhất)
2. Nếu không có → extract moiapp bằng 7-Zip
3. Port code sang app

**Thời gian ước tính:** 15-20 phút
