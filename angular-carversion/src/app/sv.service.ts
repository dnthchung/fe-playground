import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Product } from "./interfaces/product"
import { User } from "./interfaces/user"

@Injectable({
  providedIn: "root",
})
export class SVService {
  private baseUrl: string = "http://localhost:3000"
  constructor(private http: HttpClient) {}
  register(data: User) {
    return this.http.post(`${this.baseUrl}/register`, data)
  }
  login(data: User) {
    return this.http.post(`${this.baseUrl}/login`, data)
  }
  getProducts() {
    return this.http.get(`${this.baseUrl}/products`)
  }
  getProductById(id: string | number | undefined) {
    return this.http.get(`${this.baseUrl}/products/${id}`)
  }
  removeProduct(id: string | number | undefined) {
    return this.http.delete(`${this.baseUrl}/products/${id}`)
  }
  createProduct(data: Product) {
    return this.http.post(`${this.baseUrl}/products`, data)
  }
  updateProduct(id: string | number | undefined, data: Product) {
    //vì những trường data nó ko thay đổi thì nó sẽ giữ nguyên cho mik chứ ko làm mất
    return this.http.patch(`${this.baseUrl}/products/${id}`, data)
  }
}
