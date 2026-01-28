# Cấu hình Supabase và Chuyển đổi Auth flow

Dựa trên phân tích, việc chuyển đổi sang Supabase sẽ tách biệt ứng dụng khỏi backend cũ. Điều này có nghĩa là các tài nguyên trả phí hoặc API Key do server cũ cung cấp sẽ không còn khả dụng. Tuy nhiên, tính năng core và Bypass Captcha sẽ không bị ảnh hưởng.

## User Review Required

> [!IMPORTANT]
> **Các tính năng sẽ bị ảnh hưởng:**
> - **Clone Video**: Không thể dùng chế độ "Server" (Gemini). Bạn sẽ cần nhập API Key Gemini riêng trong phần cài đặt.
> - **Audio to Video Prompts**: Không thể dùng chế độ "Admin Server". Bạn sẽ cần cài đặt API Key (Gemini/Groq) thủ công.
> - **Xác thực tài khoản**: Bạn cần tạo tài khoản trong bảng `auth.users` của Supabase (hoặc tôi sẽ hỗ trợ script tạo user).

> [!WARNING]
> Nếu bạn muốn giữ tài nguyên server cũ, chúng ta không nên đổi Auth flow. Nhưng nếu bạn muốn hoàn toàn làm chủ ứng dụng với Supabase của mình, hãy tiếp tục.

## Proposed Changes

### Backend (dist-electron)

#### [MODIFY] [main-XVq9s0Wo.js](file:///D:/Auto%20Veo3%20v2.0%20Setup%202.2.0/Auto%20Veo3%20v2.0%20Setup%202.3.2/PublicNewSuperTooL%202.3.2/resources/app_current_extracted/dist-electron/main-XVq9s0Wo.js)
- Patch hàm `api:backendLogin` để gọi qua `supabase:signIn` thay vì backend cũ.
- Patch `api:backendVerifyToken` và `api:backendGetProfile` để sử dụng logic của Supabase.
- Chỉnh sửa các IPC handlers liên quan để đồng bộ hóa trạng thái đăng nhập.

### Frontend (dist)

#### [MODIFY] [index-DVAW207y.js](file:///D:/Auto%20Veo3%20v2.0%20Setup%202.2.0/Auto%20Veo3%20v2.0%20Setup%202.3.2/PublicNewSuperTooL%202.3.2/resources/app_current_extracted/dist/assets/index-DVAW207y.js) (Nếu cần)
- Nếu việc patch ở main process không đủ, sẽ cần sửa logic gọi login ở frontend để trỏ vào IPC Supabase.

## Verification Plan

### Automated Tests
- Không có sẵn framework test cho ứng dụng này.

### Manual Verification
1. **Kiểm tra Đăng nhập**: Khởi động app, nhập user/pass đã tạo trong Supabase. Expect: Đăng nhập thành công, vào được giao diện chính.
2. **Kiểm tra Thông tin Profile**: Xem app có hiển thị đúng thông tin từ Supabase không.
3. **Kiểm tra Bypass Captcha**: Chạy thử một task yêu cầu giải captcha. Expect: Captcha vẫn được giải bình thường.
4. **Kiểm tra Clone/AI Prompt**: Thử tính năng với API Key cá nhân. Expect: Hoạt động tốt.
