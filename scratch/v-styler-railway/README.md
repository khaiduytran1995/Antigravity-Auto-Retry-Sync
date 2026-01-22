# V-Styler Ultra Pro - Railway Deployment

Ứng dụng phối đồ AI cao cấp sử dụng Gemini AI.

## Deploy lên Railway

### Bước 1: Tạo Project mới trên Railway
1. Đăng nhập [Railway.app](https://railway.app)
2. Click **"New Project"** → **"Deploy from GitHub repo"**
3. Chọn repository này

### Bước 2: Cấu hình Environment Variables
Trong Settings > Variables, thêm:
```
GEMINI_API_KEY=your_gemini_api_key_here
```

> **Lấy API key tại:** https://aistudio.google.com/app/apikey

### Bước 3: Deploy
Railway sẽ tự động:
- Detect Node.js project
- Chạy `npm install`
- Chạy `npm run build`
- Chạy `npm run start`

### Lệnh Build/Start
| Command | Mục đích |
|---------|----------|
| `npm run build` | Build production bundle |
| `npm run start` | Serve static files (production) |
| `npm run dev` | Development server |

## Chạy Local

```bash
npm install
# Copy .env.example thành .env.local và thêm API key
npm run dev
```

## Cấu trúc Project

```
├── App.tsx              # Main component
├── components/          # UI components
├── services/
│   ├── geminiService.ts # Gemini AI integration
│   └── storageService.ts # Local storage
├── railway.json         # Railway config
└── vite.config.ts       # Vite config
```
