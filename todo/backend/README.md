```bash
backend/
├── config/
│   ├── envConfig.js     # File kiểm tra biến môi trường
│   ├── dbConfig.js      # File kiểm tra và tạo cơ sở dữ liệu
│   └── swaggerConfig.js # File cấu hình Swagger
├── server.js            # File chính để chạy server
├── routes/
│   └── users.js         # Các file route khác
├── db.js                # File chứa đối tượng kết nối đến PostgreSQL
└── .env                 # File chứa các biến môi trường

```
