import { Product } from "@/app/core/models/product.model"
import { Injectable } from "@angular/core"
import { HttpClient, HttpParams } from "@angular/common/http"
import { Observable } from "rxjs"
import { environment } from "@/environments/environment"
import { API_RESOURCES } from "@/app/core/constants/api-resources"

export interface ProductResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}

// decorator => Cho Angular biết service này sẽ được cung cấp ở toàn bộ ứng dụng (singleton).
@Injectable({
  providedIn: "root",
})
export class ProductService {
  private readonly apiUrl = `${environment.apiBaseUrl}/${API_RESOURCES.products}`

  constructor(private http: HttpClient) {}

  getProducts(page: number, limit: number): Observable<ProductResponse> {
    const skip = (page - 1) * limit
    const params = new HttpParams().set("limit", limit).set("skip", skip)

    return this.http.get<ProductResponse>(this.apiUrl, { params })
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
  }

  createProduct(product: Partial<Product>): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/add`, product)
  }

  updateProduct(product: Partial<Product> & { id: number }): Observable<Product> {
    return this.http.patch<Product>(`${this.apiUrl}/${product.id}`, product)
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}/${id}`)
  }
}
