# Kế hoạch Thay đổi Tiền tố Mã máy

Thay đổi tiền tố mã máy từ `CHIENVEO3TOP` thành `DUYVEO3TOP` trong ứng dụng Auto Veo3Top.

## Phân tích

| Tiêu chí | CHIENVEO3TOP | DUYVEO3TOP |
|----------|--------------|------------|
| Độ dài   | 12 ký tự    | 10 ký tự   |
| Chênh lệch | - | **Ngắn hơn 2 ký tự** |

> [!IMPORTANT]
> Vì `DUYVEO3TOP` ngắn hơn `CHIENVEO3TOP`, tôi sẽ thêm **2 ký tự đệm** (padding) sau chuỗi mới để đảm bảo tệp thực thi không bị lỗi cấu trúc.

## Các bước thực hiện

### Bước 1: Vá tệp thực thi
- **Tệp:** `Auto Veo3Top By Chiến Hust V1.5.exe`
- **Vị trí:** Offset `598981` (UTF-16LE)
- **Thay thế:** `CHIENVEO3TOP_` → `DUYVEO3TOP___` (thêm 2 dấu gạch dưới để giữ độ dài)

### Bước 2: Cập nhật trang tính Google Sheets
Sau khi vá tệp, mã máy sẽ hiển thị dạng:
```
DUYVEO3TOP___                                          _SERVER
```

Bạn cần cập nhật trang tính của mình để khớp với định dạng mới:
```
,DUYVEO3TOP____SERVER|31/12/2099|chienhust
```

## Kế hoạch xác minh

### Kiểm tra tự động
- Đọc lại tệp EXE để xác nhận chuỗi mới đã nằm đúng vị trí.

### Kiểm tra thủ công
- Mở ứng dụng và xác nhận mã máy hiển thị là `DUYVEO3TOP___..._SERVER`.

## Lưu ý
> [!WARNING]
> Nếu bạn muốn tiền tố hiển thị **chính xác** là `DUYVEO3TOP_` (chỉ 1 dấu gạch dưới), tôi cần phân tích thêm cách ứng dụng xử lý độ dài chuỗi. Có thể cần sửa đổi phức tạp hơn.
