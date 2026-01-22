# Chuyển Fashion AI Studio sang Google AI Studio API Miễn Phí

## Mô tả vấn đề
Trang web Fashion AI Studio hiện sử dụng `LOVABLE_API_KEY` để gọi AI qua `ai.gateway.lovable.dev` - đây là dịch vụ có phí và yêu cầu credits. Cần chuyển sang sử dụng trực tiếp Google AI Studio API (miễn phí với Gemini API key).

## Hiện trạng

| Edge Function | API hiện tại | Trạng thái |
|--------------|-------------|-----------|
| `image-editor` | Google AI + Lovable fallback | ✅ Đã hỗ trợ Google AI với key rotation |
| `generate-storyboard` | Lovable API Gateway | ❌ Cần sửa |
| `analyze-fashion` | Lovable API Gateway | ❌ Cần sửa |
| `virtual-tryon` | Lovable API Gateway | ❌ Cần sửa |

---

## Proposed Changes

### Supabase Edge Functions

---

#### [MODIFY] [generate-storyboard/index.ts](file:///c:/Users/hp/Downloads/fashiond-main/supabase/functions/generate-storyboard/index.ts)

**Thay đổi:**
1. Thêm helper functions từ `image-editor` để hỗ trợ key rotation: `getGoogleAIKeys()`, `mergeApiKeys()`, `callGeminiWithRotation()`
2. Nhận `userApiKeys` từ request body
3. Gọi trực tiếp Google Generative AI API thay vì Lovable gateway
4. Fallback về Lovable API nếu không có Google AI keys

---

#### [MODIFY] [analyze-fashion/index.ts](file:///c:/Users/hp/Downloads/fashiond-main/supabase/functions/analyze-fashion/index.ts)

**Thay đổi:**
1. Thêm helper functions cho key rotation
2. Nhận `userApiKeys` từ request body  
3. Gọi trực tiếp `generativelanguage.googleapis.com` với model `gemini-2.0-flash-exp`
4. Fallback về Lovable API nếu không có keys

---

#### [MODIFY] [virtual-tryon/index.ts](file:///c:/Users/hp/Downloads/fashiond-main/supabase/functions/virtual-tryon/index.ts)

**Thay đổi:**
1. Thêm helper functions cho key rotation
2. Nhận `userApiKeys` từ request body
3. Sử dụng model `gemini-2.0-flash-exp` với `responseModalities: ['IMAGE', 'TEXT']` cho image generation
4. Fallback về Lovable API nếu không có keys

---

### Frontend Components

---

#### [MODIFY] [FashionImageAnalyzer.tsx](file:///c:/Users/hp/Downloads/fashiond-main/src/components/FashionImageAnalyzer.tsx)

**Thay đổi:**
- Import `getUserApiKeys` từ `ApiKeySettings`
- Gửi `userApiKeys` trong request body khi gọi `analyze-fashion`

---

#### [MODIFY] [useStoryboardGenerator.ts](file:///c:/Users/hp/Downloads/fashiond-main/src/hooks/useStoryboardGenerator.ts)

**Thay đổi:**
- Import `getUserApiKeys` từ `ApiKeySettings`
- Gửi `userApiKeys` trong request body khi gọi `generate-storyboard`

---

#### [MODIFY] [VirtualTryOn.tsx](file:///c:/Users/hp/Downloads/fashiond-main/src/components/VirtualTryOn.tsx)

**Thay đổi:**
- Import `getUserApiKeys` từ `ApiKeySettings`
- Gửi `userApiKeys` trong request body cho tất cả các steps

---

## Verification Plan

### Manual Verification

> [!IMPORTANT]
> Để test, bạn cần có ít nhất 1 Google AI API key từ [Google AI Studio](https://aistudio.google.com/apikey).

**Các bước test:**

1. **Thêm API Key:**
   - Mở website và vào trang Fashion Studio
   - Cuộn xuống phần "Google AI API Keys"
   - Thêm API key của bạn (bắt đầu bằng `AIzaSy...`)

2. **Test Image Editor (đã hoạt động):**
   - Tải ảnh lên và thử đổi nền
   - Kiểm tra console không có lỗi

3. **Test Analyze Fashion:**
   - Vào tab "AI Phân tích"
   - Tải ảnh thời trang và nhấn "Phân tích với AI Fashion Expert"
   - Kiểm tra kết quả phân tích hiển thị

4. **Test Virtual Try-On:**
   - Vào tab "Virtual Try-On"
   - Tải ảnh người mẫu và ảnh trang phục
   - Nhấn "Bắt đầu xử lý"
   - Kiểm tra ảnh kết quả

5. **Test Generate Storyboard:**
   - Vào trang chính (Cinema AI Director)
   - Nhập ý tưởng và nhấn "Tạo Storyboard với AI Director"
   - Kiểm tra storyboard được tạo

### Automated Tests
Không có automated tests hiện có trong dự án. Verification sẽ thực hiện manual.

---

## Lưu ý kỹ thuật

- Google AI API miễn phí có rate limit (~60 requests/phút với Gemini Flash)
- User có thể thêm nhiều API keys để tránh bị limit
- Hệ thống sẽ tự động xoay vòng keys khi gặp lỗi 429/403
- Model `gemini-2.0-flash-exp` hỗ trợ cả text và image generation
