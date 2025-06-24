import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import { Product } from '../models/product';
import { Brand } from '../models/brand';
import { Category } from '../models/category';
import { Review } from '../models/review';

export interface DatabaseResponse {
  users: any[];
  categories: Category[];
  brands: Brand[];
  products: Product[];
  reviews: Review[];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly apiUrl = '/api';

  constructor(private http: HttpClient) {}

  // Get all data by combining API calls
  getAllData(): Observable<DatabaseResponse> {
    return forkJoin({
      users: this.http.get<any[]>(`${this.apiUrl}/users`),
      categories: this.http.get<Category[]>(`${this.apiUrl}/categories`),
      brands: this.http.get<Brand[]>(`${this.apiUrl}/brands`),
      products: this.http.get<Product[]>(`${this.apiUrl}/products`),
      reviews: this.http.get<Review[]>(`${this.apiUrl}/reviews`)
    });
  }

  // Get products from API
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  // Get featured products
  getFeaturedProducts(): Observable<Product[]> {
    return this.getProducts().pipe(
      map(products => products.filter(product => product.isFeatured))
    );
  }

  // Get new arrivals
  getNewArrivals(): Observable<Product[]> {
    return this.getProducts().pipe(
      map(products => products.filter(product => product.isNew))
    );
  }

  // Get top selling products (highest rated)
  getTopSellingProducts(): Observable<Product[]> {
    return this.getProducts().pipe(
      map(products => products
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4)
      )
    );
  }

  // Get brands from API
  getBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${this.apiUrl}/brands`);
  }

  // Get categories from API
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/categories`);
  }

  // Get reviews for a product
  getProductReviews(productId: number): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.apiUrl}/reviews?productId=${productId}`);
  }
}
