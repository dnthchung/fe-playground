import { Component } from "@angular/core"
import { Product } from "../../interfaces/product"
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms"
import { SVService } from "../../sv.service"
import { Router } from "@angular/router"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-product-add",
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: "./product-add.component.html",
  styleUrl: "./product-add.component.scss",
})
export class ProductAddComponent {
  product: Product = {} as Product
  productForm: FormGroup = {} as FormGroup

  constructor(private fb: FormBuilder, private sv: SVService, private router: Router) {
    this.productForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(3)]],
      description: ["", [Validators.required]],
      price: [0, [Validators.required, Validators.min(0)]],
    })
  }

  handleSubmit() {
    if (this.productForm.valid) {
      this.sv.createProduct(this.productForm.value).subscribe(() => {
        this.router.navigate([""])
      })
    } else {
      console.error("Form is invalid")
    }
  }
}
