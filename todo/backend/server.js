// server.js
const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./config/swaggerConfig");
require("dotenv").config();

// Kiểm tra các biến môi trường
require("./config/envConfig");

// Kiểm tra và tạo cơ sở dữ liệu nếu cần thiết
const { checkAndCreateDatabase } = require("./config/dbConfig");
const pool = require("./db");

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await checkAndCreateDatabase();

  // Middleware
  app.use(express.json());

  // Sử dụng Swagger UI để tạo tài liệu API
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

  // Định tuyến
  const userRoutes = require("./routes/users");
  const carRoutes = require("./routes/car");

  app.use("/", userRoutes);
  app.use("/", carRoutes);

  // Khởi động server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
    console.log(`Swagger UI is available at http://localhost:${PORT}/api-docs`);
  });
};

startServer();
