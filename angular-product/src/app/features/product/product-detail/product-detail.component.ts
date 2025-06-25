import { Component, OnInit } from "@angular/core"
import { CommonModule, CurrencyPipe, DatePipe } from "@angular/common"
import { ActivatedRoute, RouterLink } from "@angular/router"
import { ProductService } from "@/app/core/services/product.service"
import { Product } from "@/app/core/models/product.model"

@Component({
  selector: "app-product-detail",
  standalone: true,
  // Thêm RouterLink để directive [routerLink] hoạt động
  imports: [CommonModule, RouterLink],
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"],
})
export class ProductDetailComponent implements OnInit {
  // --- BIẾN TRẠNG THÁI DỮ LIỆU ---
  product: Product | null = null
  isLoading = true
  error: string | null = null

  // --- BIẾN TRẠNG THÁI CHO UI ---
  selectedImageUrl: string | null = null
  quantity = 1
  activeTab: "description" | "specs" | "reviews" = "description"

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    // Sử dụng optional chaining '?' để an toàn hơn
    const idParam = this.route.snapshot.paramMap.get("id")
    if (!idParam) {
      this.error = "ID sản phẩm không được cung cấp trên URL."
      this.isLoading = false
      return
    }

    const id = Number(idParam)
    if (isNaN(id)) {
      this.error = "ID sản phẩm không hợp lệ."
      this.isLoading = false
      return
    }

    this.productService.getProductById(id).subscribe({
      next: (res) => {
        this.product = res
        // Khởi tạo ảnh được chọn sau khi có dữ liệu sản phẩm
        if (this.product) {
          this.selectedImageUrl = this.product.thumbnail
        }
        this.isLoading = false
      },
      error: (err) => {
        // Cung cấp thông báo lỗi rõ ràng hơn
        console.error("Lỗi khi tải sản phẩm:", err)
        this.error = "Không thể tải thông tin sản phẩm. Vui lòng thử lại sau."
        this.isLoading = false
      },
    })
  }

  // --- HÀM XỬ LÝ SỰ KIỆN CHO UI ---

  /**
   * Cập nhật ảnh chính khi người dùng click vào thumbnail.
   * @param imageUrl URL của ảnh được chọn.
   */
  selectImage(imageUrl: string): void {
    this.selectedImageUrl = imageUrl
  }

  /**
   * Tăng hoặc giảm số lượng sản phẩm.
   * @param change Giá trị thay đổi (+1 hoặc -1).
   */
  updateQuantity(change: number): void {
    if (!this.product) return // Đảm bảo sản phẩm đã được tải

    const newQuantity = this.quantity + change

    // Chỉ cập nhật nếu số lượng nằm trong giới hạn cho phép (từ 1 đến số lượng tồn kho)
    if (newQuantity >= 1 && newQuantity <= this.product.stock) {
      this.quantity = newQuantity
    }
  }
}
