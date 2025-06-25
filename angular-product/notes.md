Dưới đây là phần **README chi tiết** bạn có thể dùng để hướng dẫn xây dựng **demo CRUD Angular** với API mẫu của DummyJSON (resource `products`):

---

## 🚀 CRUD Demo – DummyJSON Products API

### 1. **Base URL**

Tất cả các endpoint đều có cùng tiền tố:

```
https://dummyjson.com/products
```

([dummyjson.com][1])

---

### 2. **GET – Lấy danh sách sản phẩm**

* **Endpoint:** `GET /products`
* **Mặc định:** trả về 30 sản phẩm đầu.
* **Query params hỗ trợ:**

  * `limit`: số lượng kết quả
  * `skip`: bỏ qua N mục (dùng cho phân trang)
  * `select`: chọn cụ thể các trường như `title,price`
  * `sortBy`, `order`: sắp xếp theo trường cụ thể (`asc` hoặc `desc`)
    → Ví dụ:

```ts
GET https://dummyjson.com/products?limit=10&skip=20&select=title,price
GET https://dummyjson.com/products?sortBy=title&order=asc
```

([dummyjson.com][2], [dummyjson.com][1])

---

### 3. **GET – Lấy chi tiết 1 sản phẩm**

* **Endpoint:** `GET /products/{id}`
* Trả về đầy đủ thông tin: `id, title, description, price, stock, rating`, … v.v.
  ([dummyjson.com][1])

---

### 4. **GET – Tìm kiếm sản phẩm**

* **Endpoint:** `GET /products/search?q={query}`
* Ví dụ:

```ts
GET https://dummyjson.com/products/search?q=phone
```

Trả về các sản phẩm khớp từ khóa.
([github.com][3])

---

### 5. **GET – Lấy danh mục sản phẩm**

* **Endpoint:** `GET /products/categories`
* Trả về danh sách các category có slug và url tương ứng.
  ([dummyjson.com][1])

---

### 6. **GET – Lọc theo category**

* **Endpoint:** `GET /products/category/{category}`
* Ví dụ:

```ts
GET https://dummyjson.com/products/category/beauty
```

Trả về sản phẩm thuộc category *beauty*.
([github.com][3])

---

### 7. **POST – Thêm sản phẩm mới**

* **Endpoint:** `POST /products/add`
* Body JSON chứa các trường như:

```json
{
  "title": "New Product",
  "price": 99.99,
  "description": "Mô tả chi tiết"
}
```

* DummyJSON sẽ **mô phỏng tạo mới** và trả về object mới với `id`.
  ([apichallenges.eviltester.com][4], [dummyjson.com][1], [dummyjson.com][5])

---

### 8. **PUT/PATCH – Cập nhật sản phẩm**

* **Endpoint:** `PUT|PATCH /products/{id}`
* Gửi các trường cần cập nhật:

```json
{
  "title": "Updated Title",
  "price": 79.99
}
```

* DummyJSON mô phỏng cập nhật và phản hồi object đã thay đổi (không thực sự lưu trên server).
  ([apichallenges.eviltester.com][4])

---

### 9. **DELETE – Xóa sản phẩm**

* **Endpoint:** `DELETE /products/{id}`
* Ví dụ:

```ts
DELETE https://dummyjson.com/products/5
```

* DummyJSON mô phỏng xóa và trả về object đã xóa (có thể thêm `isDeleted`, `deletedOn`).
  ([apichallenges.eviltester.com][4])

---

## 📌 Cách triển khai trong **Angular**

### A. **Service kết nối API**

```ts
@Injectable({ providedIn: 'root' })
export class ProductService {
  private baseUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getAll(params?: any) { return this.http.get(`${this.baseUrl}`, { params }); }
  get(id: number) { return this.http.get(`${this.baseUrl}/${id}`); }
  search(query: string) { return this.http.get(`${this.baseUrl}/search`, { params: { q: query } }); }
  create(data: any) { return this.http.post(`${this.baseUrl}/add`, data); }
  update(id: number, data: any) { return this.http.put(`${this.baseUrl}/${id}`, data); }
  delete(id: number) { return this.http.delete(`${this.baseUrl}/${id}`); }
}
```

### B. **Component CRUD mẫu**

* **ListComponent**: gọi `getAll()` hiển thị trong `MatTable`, hỗ trợ phân trang, sắp xếp.
* **DetailComponent**: dùng `get(id)` hiển thị chi tiết.
* **FormComponent**: dùng Reactive Forms cho tạo/cập nhật; submit gọi `create()` hoặc `update()`.
* **Delete action**: xóa sản phẩm và refresh list.

### C. **Phân trang & tìm kiếm**

* `limit`, `skip`, `sortBy`, `order`, `q` từ UI bind sang `HttpParams`.

### D. **Kể thêm**

* Không cần backend – DummyJSON mô phỏng tất cả.
* Có thể test thêm thao tác bất thường như xoá rồi update… chỉ để demo.
* Bạn có thể bật `delay=1000` test loading spinner.
  ([dummyjson.com][1])

---

## 📑 Kết luận

Đây là một API mẫu rất phù hợp để làm demo CRUD với Angular: đầy đủ GET/POST/PUT/PATCH/DELETE, hỗ trợ phân trang, tìm kiếm, phân loại, không cần backend thực. Bạn chỉ cần viết service + component, sử dụng HttpClient là gần như sẵn sàng.

Nếu cần mẫu body JSON, response cụ thể, hoặc ví dụ code cho từng endpoint, mình có thể bổ sung nhé!

[1]: https://dummyjson.com/docs/products?utm_source=chatgpt.com "Products - Free Fake REST API for Placeholder JSON Data"
[2]: https://dummyjson.com/docs?utm_source=chatgpt.com "Docs - Free Fake REST API for Placeholder JSON Data"
[3]: https://github.com/Ovi/DummyJSON?utm_source=chatgpt.com "Ovi/DummyJSON - GitHub"
[4]: https://apichallenges.eviltester.com/practice-sites/dummyjson?utm_source=chatgpt.com "Dummy JSON - A Mix of API Simulator and GET API - Practice API"
[5]: https://dummyjson.com/docs/posts?utm_source=chatgpt.com "Posts - Free Fake REST API for Placeholder JSON Data"
