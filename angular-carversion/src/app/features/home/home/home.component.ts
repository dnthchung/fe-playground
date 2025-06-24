import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../core/services/data.service';
import { Product } from '../../../core/models/product';
import { Brand } from '../../../core/models/brand';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { BrandRowComponent } from '../../../shared/components/brand-row/brand-row.component';
import { CustomerReviewComponent } from '../customer-review/customer-review.component';
import { DressStyleComponent } from '../dress-style/dress-style.component';
import { NewsletterComponent } from '../newsletter/newsletter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    BrandRowComponent,
    CustomerReviewComponent,
    DressStyleComponent,
    NewsletterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  newArrivals: Product[] = [];
  topSelling: Product[] = [];
  brands: Brand[] = [];
  isLoading = true;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataService.getAllData().subscribe({
      next: (data) => {
        this.newArrivals = data.products.filter(p => p.isNew).slice(0, 4);
        this.topSelling = data.products
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 4);
        this.brands = data.brands;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading data:', error);
        this.isLoading = false;
      }
    });
  }
}
