# TVC Story Creator - Hệ Thống Tự Động Hoàn Chỉnh

## Mục tiêu
Xây dựng hệ thống tự động tạo TVC với Antigravity AI là trái tim sáng tạo.

## Kiến Trúc Hệ Thống

```
┌─────────────────────────────────────────────────────────────────┐
│                        FRONTEND (Web App)                       │
│  - Upload hình ảnh                                              │
│  - Cấu hình TVC (phong cách, thông điệp, thời lượng)           │
│  - Hiển thị storyboard & kịch bản                              │
└─────────────────────┬───────────────────────────────────────────┘
                      │ HTTP API
                      ▼
┌─────────────────────────────────────────────────────────────────┐
│                    BACKEND (Python Flask)                       │
│  - Nhận & lưu hình ảnh                                         │
│  - Tạo job request (JSON)                                      │
│  - Phục vụ kết quả                                             │
└─────────────────────┬───────────────────────────────────────────┘
                      │ File System
                      ▼
┌─────────────────────────────────────────────────────────────────┐
│                   AI PROCESSOR (Antigravity)                    │
│  - Đọc job request                                             │
│  - Phân tích hình ảnh                                          │
│  - Tạo câu chuyện TVC                                          │
│  - Generate hình ảnh mới                                       │
│  - Lưu kết quả                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Proposed Changes

### Backend Server

#### [NEW] [server.py](file:///c:/Users/hp/Downloads/Lap%20Xuong%20Kim%20Thanh/server.py)
Python Flask server:
- `POST /api/upload` - Upload hình ảnh
- `POST /api/generate` - Tạo job request cho AI
- `GET /api/status/:jobId` - Kiểm tra trạng thái
- `GET /api/result/:jobId` - Lấy kết quả

#### [NEW] [requirements.txt](file:///c:/Users/hp/Downloads/Lap%20Xuong%20Kim%20Thanh/requirements.txt)
Dependencies: Flask, Flask-CORS, Pillow

---

### AI Processor

#### [NEW] [ai_processor.py](file:///c:/Users/hp/Downloads/Lap%20Xuong%20Kim%20Thanh/ai_processor.py)
Script để tôi xử lý:
- Đọc job từ `jobs/pending/`
- Phân tích hình ảnh
- Tạo prompt cho generate_image
- Lưu kết quả vào `jobs/completed/`

---

### Thư mục cấu trúc

```
Lap Xuong Kim Thanh/
├── index.html          # Frontend
├── styles.css
├── app.js              # Cập nhật để gọi API
├── server.py           # Backend Flask
├── ai_processor.py     # AI workflow
├── requirements.txt
├── uploads/            # Hình upload
├── generated/          # Hình AI tạo
└── jobs/
    ├── pending/        # Job chờ xử lý
    └── completed/      # Kết quả hoàn thành
```

---

### [MODIFY] [app.js](file:///c:/Users/hp/Downloads/Lap%20Xuong%20Kim%20Thanh/app.js)
Cập nhật để gọi API backend thay vì xử lý local.

---

## Workflow Hoạt Động

1. **User** upload hình → Frontend gửi lên Backend
2. **Backend** lưu hình, tạo job JSON
3. **AI (Tôi)** đọc job, tạo story + hình ảnh
4. **Backend** phục vụ kết quả
5. **Frontend** hiển thị storyboard hoàn chỉnh

---

## Verification Plan

### Automated Tests
```bash
# Chạy server
python server.py

# Test upload
curl -X POST -F "images=@test.jpg" http://localhost:5000/api/upload

# Test generate
curl -X POST http://localhost:5000/api/generate -d '{"jobId":"xxx","style":"emotional"}'
```

### Manual Verification
- Upload hình qua web app
- Kiểm tra job được tạo trong `jobs/pending/`
- Chạy AI processor
- Xem kết quả trên storyboard
