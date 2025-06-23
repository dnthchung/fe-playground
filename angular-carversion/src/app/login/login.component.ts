import { Component } from "@angular/core"
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-login",
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  authForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.authForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    })
  }

  handleSubmit() {
    if (this.authForm.valid) {
      const { email, password } = this.authForm.value
      console.log("Login with:", email, password)
      // Gọi API hoặc xử lý logic đăng nhập tại đây
    } else {
      this.authForm.markAllAsTouched()
    }
  }
}
