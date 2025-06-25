import { Routes } from "@angular/router"
import { HomeComponent } from "./features/home/home/home.component"
import { ProductDetailComponent } from "./features/product/product-detail/product-detail.component"

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "products/:id", component: ProductDetailComponent },
  { path: "**", redirectTo: "" },
]
