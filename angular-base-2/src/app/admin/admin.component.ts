import { Component, OnInit } from "@angular/core"
import { RouterModule } from "@angular/router"
import { Product } from "../interfaces/product"
import { SVService } from "../sv.service"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-admin",
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: "./admin.component.html",
  styleUrl: "./admin.component.scss",
})
export class AdminComponent implements OnInit {
  products: Product[] = []
  constructor(private sv: SVService) {}

  ngOnInit() {
    this.sv.getProducts().subscribe((data) => {
      this.products = data as Product[]
    })
  }

  deleteProduct(id: string | number | undefined) {
    if (confirm("Are you sure you want to delete this product?")) {
      this.sv.removeProduct(id).subscribe(() => {
        this.products = this.products.filter((p) => p.id !== id)
      })
    }
  }
}
