### Các điểm nổi bật của cấu trúc dữ liệu mới:

  * **Quản lý người dùng chi tiết:** `users` giờ đây có đầy đủ thông tin cá nhân, địa chỉ, và vai trò (`admin`, `customer`), phù hợp cho việc xây dựng hệ thống đăng nhập, phân quyền và quản lý đơn hàng.
  * **Sản phẩm chuyên sâu:** Mỗi `products` có `sku` (mã sản phẩm), quản lý tồn kho (`stock`), các biến thể màu sắc chi tiết (tên, mã màu, ảnh riêng), và các thông số kỹ thuật riêng.
  * **Hỗ trợ Marketing:** Các trường như `isNew`, `isFeatured`, `discount` giúp bạn dễ dàng hiển thị các sản phẩm mới, sản phẩm nổi bật hoặc sản phẩm đang giảm giá.
  * **Dữ liệu có cấu trúc:** Mọi thứ đều được tổ chức rõ ràng, có `slug` để tạo URL thân thiện SEO, có `isActive` để bật/tắt hiển thị một đối tượng bất kỳ (sản phẩm, danh mục...).
  * **Kết nối toàn diện:** Đã bổ sung mục `reviews` và liên kết `userId` tới bảng `users` chi tiết, giúp bạn hiển thị được cả tên và avatar của người đánh giá.
