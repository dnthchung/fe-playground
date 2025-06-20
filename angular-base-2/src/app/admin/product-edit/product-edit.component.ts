import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SVService } from '../../sv.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.scss'
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup = {} as FormGroup;
  productId: string | null = null;
  isLoading: boolean = true;

  constructor(
    private fb: FormBuilder,
    private sv: SVService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.productForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      price: [0, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.loadProduct();
    }
  }

  loadProduct(): void {
    if (this.productId) {
      this.sv.getProductById(this.productId).subscribe({
        next: (product: any) => {
          this.productForm.patchValue({
            title: product.title,
            description: product.description,
            price: product.price
          });
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading product:', error);
          this.isLoading = false;
        }
      });
    }
  }

  handleSubmit(): void {
    if (this.productForm.valid && this.productId) {
      this.sv.updateProduct(this.productId, this.productForm.value).subscribe({
        next: () => {
          this.router.navigate(['/admin']);
        },
        error: (error) => {
          console.error('Error updating product:', error);
        }
      });
    } else {
      console.error('Form is invalid');
    }
  }
}
