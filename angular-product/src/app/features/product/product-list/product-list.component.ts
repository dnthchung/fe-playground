import { Product } from "@/app/core/models/product.model"
import { ProductResponse, ProductService } from "@/app/core/services/product.service"
import { CommonModule } from "@angular/common"
import { Component, OnInit } from "@angular/core"
import { RouterLink } from "@angular/router"
import { FormsModule, NgForm } from "@angular/forms"
import { ModalComponent } from "@/app/shared/components/modal/modal.component" // Import modal component của bạn

@Component({
  selector: "app-product-list",
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ModalComponent],
  templateUrl: "./product-list.component.html",
  styleUrl: "./product-list.component.scss",
})
export class ProductListComponent implements OnInit {
  products: Product[] = []
  total = 0
  page = 1
  limit = 10
  isLoading = true
  error: string | null = null

  // --- STATE CHO MODAL & FORM ---
  isModalOpen = false
  newProduct = {
    title: "",
    description: "",
    price: 0,
    category: "",
  }

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts()
  }

  fetchProducts(): void {
    this.isLoading = true
    this.productService.getProducts(this.page, this.limit).subscribe({
      next: (res: ProductResponse) => {
        this.products = res.products
        this.total = res.total
        this.isLoading = false
      },
      error: (err) => {
        this.error = "Không thể tải danh sách sản phẩm."
        console.error("Lỗi khi tải sản phẩm:", err)
        this.isLoading = false
      },
    })
  }

  // --- CÁC HÀM QUẢN LÝ MODAL ---
  openModal(): void {
    this.isModalOpen = true
  }

  closeModal(): void {
    this.isModalOpen = false
    this.resetForm()
  }

  // --- HÀM XỬ LÝ FORM ---
  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return
    }

    // Giả sử service có hàm addProduct
    this.productService.addProduct(this.newProduct).subscribe({
      next: (addedProduct) => {
        this.products.unshift(addedProduct)
        this.closeModal()
      },
      error: (err) => {
        console.error("Lỗi khi thêm sản phẩm:", err)
        alert("Thêm sản phẩm thất bại!")
      },
    })
  }

  resetForm(): void {
    // Reset form về trạng thái ban đầu
    this.newProduct = {
      title: "",
      description: "",
      price: 0,
      category: "",
    }
  }
}
