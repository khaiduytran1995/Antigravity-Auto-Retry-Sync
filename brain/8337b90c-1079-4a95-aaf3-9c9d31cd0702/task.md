# AutoVeo3 Rebuild with Custom Server

## Objective
Rebuild AutoVeo3.exe với Vercel + Supabase backend thay cho server gốc.

## Tasks

### Phase 1: Preparation
- [x] Kiểm tra các file decompiled có sẵn (33 files trong `rebuild_source/`)
- [x] Phân tích backend auth service gốc (`back.sharefilecorel.com`)
- [x] Kiểm tra Vercel backend đã có (`autoveo3-backend/`)
- [ ] Tạo implementation plan

### Phase 2: Server Setup  
- [ ] Deploy Vercel backend
- [ ] Setup Supabase database với table `users`
- [ ] Test API endpoints

### Phase 3: Code Modification
- [ ] Thay đổi `BACKEND_BASE_URL` trong source code
- [ ] Sắp xếp lại cấu trúc thư mục source
- [ ] Fix các lỗi decompile (syntax errors, control flow)

### Phase 4: Build EXE
- [ ] Cài đặt dependencies (flet, httpx, playwright, etc.)
- [ ] Tạo PyInstaller spec file
- [ ] Build và test EXE

### Phase 5: Verification
- [ ] Test login/logout với custom server
- [ ] Test các chức năng chính của app
