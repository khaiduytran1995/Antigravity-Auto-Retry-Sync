# Hướng dẫn xử lý lỗi kết nối SuperVeo

Sau khi patch domain, chúng ta đã chuẩn bị đầy đủ các công cụ để xử lý lỗi "Kết nối thất bại".

## 1. Dọn dẹp Cache (Bắt buộc)
Các phiên bản cũ của App thường lưu lại cache lỗi. Bạn cần chạy script dọn dẹp để App nhận cấu hình mới từ `api.hero.io.vn`.

- **File:** [CLEAN_UP_VEO.bat](file:///D:/SuperVeoTifo/NewSuperVeo/CLEAN_UP_VEO.bat)
- **Hành động:** Chuột phải vào file → Chọn **Run as Administrator**.

## 2. Cập nhật Server PHP (Có ghi Log)
Bản PHP mới này (V4) sẽ tự động ghi lại mọi yêu cầu từ App vào file `api_log.txt` trên host.

- **File:** [hero_php_api_v4_LOGGER.zip](file:///D:/SuperVeoTifo/NewSuperVeo/hero_php_api_v4_LOGGER.zip)
- **Hành động:** Upload lên host và giải nén.

## 3. Kiểm tra kết nối
Nếu sau khi làm 2 bước trên mà vẫn lỗi, hãy kiểm tra:
1.  **File Log:** Xem có file `api_log.txt` trong thư mục `api.hero.io.vn` trên host không?
2.  **SSL:** Truy cập `https://api.hero.io.vn/api/users/session` bằng Chrome. Nếu hiện 🔒 (Xanh) là OK, nếu báo "Không an toàn" thì App sẽ không chạy.

---

**Sẵn sàng:** Bây giờ bạn hãy chạy file `.bat` và mở lại `SuperVeo.exe` nhé!
