# Task Checklist

## Đã hoàn thành: Fix Icon Taskbar
- [x] Identify correct application directory (`Filegocdeupdate\Veo Automation`)
- [x] Create `icon.ico` from SVG/PNG with multiple sizes (256x256, 128x128, etc.)
- [x] Update `main.js` in the correct directory to use the new icon
- [x] Verify the fix by running the executable from the new directory

## Đang thực hiện: Tạo Tool Nối Video
- [x] Tạo script Python với giao diện GUI
- [x] Hỗ trợ chọn thư mục chứa video
- [x] Sắp xếp video theo thứ tự tên file (natural sort)
- [x] Sử dụng FFmpeg để nối video (concat demuxer)
- [x] Cho phép chọn đường dẫn output
- [x] Tạo batch file để chạy dễ dàng
