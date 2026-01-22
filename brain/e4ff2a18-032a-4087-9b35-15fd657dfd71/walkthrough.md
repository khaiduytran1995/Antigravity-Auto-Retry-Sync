# Walkthrough: Chuyển Fashion AI Studio sang Google AI Studio API

## Tổng quan
Đã cập nhật Fashion AI Studio website để sử dụng **Google AI Studio API miễn phí** thay vì dịch vụ có phí (Lovable API Gateway).

---

## Các thay đổi đã thực hiện

### Edge Functions (Supabase)

#### [generate-storyboard/index.ts](file:///c:/Users/hp/Downloads/fashiond-main/supabase/functions/generate-storyboard/index.ts)
- Thêm hỗ trợ Google AI keys với key rotation
- Gọi trực tiếp `generativelanguage.googleapis.com` với model `gemini-2.0-flash-exp`
- Fallback về Lovable API nếu không có Google AI keys
- Nhận `userApiKeys` từ request body

render_diffs(file:///c:/Users/hp/Downloads/fashiond-main/supabase/functions/generate-storyboard/index.ts)

---

#### [analyze-fashion/index.ts](file:///c:/Users/hp/Downloads/fashiond-main/supabase/functions/analyze-fashion/index.ts)
- Thêm hỗ trợ Google AI keys với key rotation cho vision model
- Nhận `userApiKeys` từ request body
- Fallback về Lovable API nếu không có keys

render_diffs(file:///c:/Users/hp/Downloads/fashiond-main/supabase/functions/analyze-fashion/index.ts)

---

#### [virtual-tryon/index.ts](file:///c:/Users/hp/Downloads/fashiond-main/supabase/functions/virtual-tryon/index.ts)
- Thêm hỗ trợ Google AI keys với key rotation cho image generation
- Sử dụng `responseModalities: ['IMAGE', 'TEXT']` để tạo ảnh
- Nhận `userApiKeys` từ request body
- Fallback về Lovable API nếu không có keys

render_diffs(file:///c:/Users/hp/Downloads/fashiond-main/supabase/functions/virtual-tryon/index.ts)

---

### Frontend Components

#### [useStoryboardGenerator.ts](file:///c:/Users/hp/Downloads/fashiond-main/src/hooks/useStoryboardGenerator.ts)
- Import `getUserApiKeys` từ `ApiKeySettings`
- Gửi `userApiKeys` trong request body

render_diffs(file:///c:/Users/hp/Downloads/fashiond-main/src/hooks/useStoryboardGenerator.ts)

---

#### [FashionImageAnalyzer.tsx](file:///c:/Users/hp/Downloads/fashiond-main/src/components/FashionImageAnalyzer.tsx)
- Import `getUserApiKeys` từ `ApiKeySettings`
- Gửi `userApiKeys` trong request body

render_diffs(file:///c:/Users/hp/Downloads/fashiond-main/src/components/FashionImageAnalyzer.tsx)

---

#### [VirtualTryOn.tsx](file:///c:/Users/hp/Downloads/fashiond-main/src/components/VirtualTryOn.tsx)
- Import `getUserApiKeys` từ `ApiKeySettings`
- Gửi `userApiKeys` trong tất cả virtual-tryon requests

render_diffs(file:///c:/Users/hp/Downloads/fashiond-main/src/components/VirtualTryOn.tsx)

---

## Cách sử dụng

### Bước 1: Lấy Google AI API Key (miễn phí)
1. Truy cập [Google AI Studio](https://aistudio.google.com/apikey)
2. Đăng nhập với Google account
3. Click "Create API key"
4. Copy API key (bắt đầu bằng `AIzaSy...`)

### Bước 2: Thêm API Key vào website
1. Mở website Fashion AI Studio
2. Vào tab **Fashion Studio** → cuộn xuống phần **Google AI API Keys**
3. Dán API key và nhấn **Thêm**
4. Có thể thêm nhiều keys để tránh bị rate limit

### Bước 3: Sử dụng các tính năng
Bây giờ tất cả các tính năng sẽ sử dụng Google AI API miễn phí:
- **Generate Storyboard** - Tạo storyboard cho video
- **Analyze Fashion** - Phân tích outfit
- **Virtual Try-On** - Thử đồ ảo
- **Image Editor** - Chỉnh sửa ảnh (đã hoạt động trước đó)

---

## Lưu ý kỹ thuật

- Google AI API miễn phí có rate limit (~60 requests/phút)
- User có thể thêm nhiều API keys để tránh bị limit
- Hệ thống tự động xoay vòng keys khi gặp lỗi 429/403
- Nếu không có Google AI keys, hệ thống fallback về Lovable API (nếu còn credits)
