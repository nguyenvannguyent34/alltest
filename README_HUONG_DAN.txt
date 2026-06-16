PCCC CHECK OFFLINE - WEB/PWA

1. Mục đích
- App web chạy offline trên iPhone/iPad/Android/máy tính.
- Dùng để tra cứu catalog hệ thống PCCC, tạo checklist kiểm tra, ghi lỗi, chụp ảnh minh chứng và in/lưu PDF.

2. Cách chạy nhanh trên máy tính
- Mở file index.html bằng trình duyệt Chrome/Edge/Safari.
- Một số tính năng offline PWA/service worker hoạt động tốt nhất khi upload lên hosting có HTTPS.

3. Cách dùng trên iPhone không cần Mac
- Upload toàn bộ thư mục PCCC_Check_PWA lên hosting HTTPS.
- Mở link bằng Safari trên iPhone.
- Bấm nút Chia sẻ > Thêm vào Màn hình chính.
- Sau đó mở biểu tượng PCCC Check như app.

4. Cách dùng nội bộ không cần App Store
- Có thể upload lên hosting hiện có.
- Ví dụ đường dẫn: https://tenmiencuaban.vn/pccc-check/
- Cán bộ mở link, thêm ra màn hình chính.

5. Cập nhật catalog/checklist bởi admin
- Vào mục Cập nhật nội dung kiểm tra.
- Dán JSON catalog mới theo cấu trúc mẫu trong app.
- Bấm Cập nhật catalog.
- Dữ liệu sẽ lưu offline trên thiết bị.

6. Lưu ý
- Dữ liệu lưu trong trình duyệt của từng thiết bị bằng localStorage.
- Nếu xóa dữ liệu website trong Safari/Chrome thì lịch sử kiểm tra có thể mất.
- Ảnh lưu dạng base64 trong trình duyệt; không nên lưu quá nhiều ảnh dung lượng lớn.
- Bản MVP này chưa có đăng nhập và chưa đồng bộ server.
- Muốn dùng chuyên nghiệp nhiều cán bộ nên phát triển thêm backend admin + tài khoản + đồng bộ dữ liệu.

7. Xuất PDF
- Trong màn hình báo cáo, bấm In / Lưu PDF.
- Trên iPhone: dùng chức năng Chia sẻ/In của Safari để lưu PDF.
