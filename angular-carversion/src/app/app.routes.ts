import { Routes } from "@angular/router"
import { AdminComponent } from "./admin/admin.component"
import { LoginComponent } from "./login/login.component"
import { RegisterComponent } from "./register/register.component"
import { ProductAddComponent } from "./admin/product-add/product-add.component"
import { ProductEditComponent } from "./admin/product-edit/product-edit.component"

export const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
  },
  {
    path: "admin",
    component: AdminComponent,
  },
  {
    path: "admin/product-add",
    component: ProductAddComponent,
  },
  {
    path: "admin/product-edit/:id",
    component: ProductEditComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
]
