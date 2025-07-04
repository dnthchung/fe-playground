import { CommonModule } from "@angular/common"
import { Component, OnInit } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  title = "asm"

  isMenuOpen = false

  ngOnInit(): void {}

  logout() {
    console.log("logout")
  }
}
