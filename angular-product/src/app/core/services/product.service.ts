import { Product } from "@/app/core/models/product.model"
import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable, forkJoin, map } from "rxjs"

export interface ProductResponse {
  products: Product[]
  total: number
  page: number
  limit: number
}

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private apiUrl = "https://dummyjson.com/products"

  constructor(private http: HttpClient) {}

  getProducts(page: number, limit: number): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(`${this.apiUrl}?page=${page}&limit=${limit}`)
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product)
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${product.id}`, product)
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}
