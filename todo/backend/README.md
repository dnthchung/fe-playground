```bash
backend/
├── config.js      # File chứa cấu hình kết nối và kiểm tra biến môi trường, kiểm tra db đã có trong hệ thống chưa, nếu chưa có thì THÔNG BÁO và TẠO MỚI, còn nếu đã có thì thong báo trạng thi kết nối (thành công hay không  )
├── server.js      # File chính để chạy server
├── db.js          # File chứa đối tượng kết nối đến PostgreSQL
├── .env           # File chứa các biến môi trường
└── ...
```
