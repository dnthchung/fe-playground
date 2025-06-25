import { Product } from "@/app/core/models/product.model"
import { ProductResponse, ProductService } from "@/app/core/services/product.service"
import { CommonModule } from "@angular/common"
import { Component, OnInit } from "@angular/core"
import { RouterLink } from "@angular/router"

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit {
  products: Product[] = []
  total = 0
  page = 1
  limit = 10
  isLoading = false

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
        console.error("Lỗi khi tải sản phẩm:", err)
        this.isLoading = false
      },
    })
  }
}
