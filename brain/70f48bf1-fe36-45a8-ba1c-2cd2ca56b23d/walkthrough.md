# Phân tích cơ chế xác thực (Authentication)

Tôi đã tìm hiểu nơi ứng dụng kiểm tra xác thực và nơi nó lưu trữ thông tin phiên làm việc.

## 1. Vị trí kiểm tra xác thực

Việc kiểm tra xác thực diễn ra ở hai nơi chính sau khi bản bypass được áp dụng:

### Main Process (Backend)
Trong file `main-*.js` đã được vá (nằm trong `app.asar`), các trình xử lý IPC sau bị chặn:
- `api:backendLogin`: Được chuyển hướng đến Supabase RPC của bạn: `https://gkhkerlxxoihfvgnexaq.supabase.co/rest/v1/rpc/login_user`.
- `api:backendVerifyToken`: Được vá để luôn trả về `success: true`, đó là lý do tại sao ứng dụng vẫn giữ trạng thái đăng nhập.
- `api:backendGetProfile`: Được vá để trả về một **Hồ sơ VIP** có sẵn.

### Renderer Process (Frontend)
Frontend kiểm tra token khi khởi động. Nếu thấy có token, nó sẽ yêu cầu main process xác minh thông qua `api:backendVerifyToken`. Vì chúng ta đã vá trình xử lý đó để luôn trả lời "OK", ứng dụng sẽ bỏ qua bước kiểm tra thực tế.

### Thư mục dữ liệu chính (QUAN TRỌNG NHẤT)
Bản app này có tên nội bộ là `veo-mac-pro`. Đây là nơi chứa Token và cấu hình Supabase:
- **Roaming (Xóa/Đổi tên thư mục này):** 
  `C:\Users\hp\AppData\Roaming\veo-mac-pro`
- **Local (Kiểm tra thêm):**
  `C:\Users\hp\AppData\Local\veo-mac-pro-updater`

### Thư mục WebView2 (Dành cho bản PublicNewSuperTooL)
Nếu app chạy trên nền WebView2, dữ liệu sẽ nằm ở đây:
- **Đường dẫn:** `C:\Users\hp\AppData\Local\com.veo3.auto`

### File ẩn trong thư mục cá nhân
- **File:** `C:\Users\hp\.veo3-license.dat` (Hãy xóa file này nếu thấy)

### URL Supabase cố định
Lý do nó "cứ quay trở lại Supabase của bạn" là vì hằng số `BACKEND_URL` đã bị **ghi đè** trong mã nguồn của ứng dụng bởi các script vá của bạn.
- **File**: `extracted_2.2.9\dist-electron\main-BlLMs7El.js`
- **Thay đổi**: `const BACKEND_URL = "https://gkhkerlxxoihfvgnexaq.supabase.co";`

## Bảng tóm tắt

| Tính năng | Vị trí lưu trữ | Cách xử lý |
| :--- | :--- | :--- |
| **URL Supabase** | Ghi cứng trong `main-*.js` | Phải sửa trong code và rebuild |
| **Token đăng nhập** | `%APPDATA%\veo-mac-pro` | Đổi tên hoặc xóa thư mục này |
| **WebView2 Data** | `%LOCALAPPDATA%\com.veo3.auto` | Xóa nếu các cách trên không xong |

> [!NOTE]
> Nếu bạn muốn thay đổi instance Supabase, bạn phải sửa `SUPABASE_URL` trong script vá của mình và chạy lại quá trình vá/build lại (rebuild).
