import { Component } from "@angular/core"
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, Form } from "@angular/forms"
import { RouterModule } from "@angular/router"
import { CommonModule } from "@angular/common"
import { User } from "../interfaces/user"

@Component({
  selector: "app-register",
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.scss",
})
export class RegisterComponent {
  user: User = {} as User
  authForm: FormGroup = {} as FormGroup

  constructor(private fb: FormBuilder) {
    this.authForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", [Validators.required]],
    })
  }

  handleSubmit() {
    if (this.authForm.valid) {
      const { email, password, confirmPassword } = this.authForm.value
      if (password !== confirmPassword) {
        this.authForm.get("confirmPassword")?.setErrors({ mismatch: true })
        return
      }

      console.log("Register data:", this.authForm.value)
      // Call API here
    } else {
      this.authForm.markAllAsTouched()
    }
  }
}
