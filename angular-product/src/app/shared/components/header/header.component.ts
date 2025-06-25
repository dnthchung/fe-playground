// src/app/shared/components/header/header.component.ts

import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
// 1. IMPORT THÊM RouterLink và RouterLinkActive
import { RouterLink, RouterLinkActive } from "@angular/router"

@Component({
  selector: "app-header",
  standalone: true,
  // 2. THÊM CHÚNG VÀO MẢNG IMPORTS
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  constructor() {}
}
