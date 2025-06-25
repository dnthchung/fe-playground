// src/app/features/home/home/home.component.ts

import { Component } from "@angular/core"
import { RouterLink } from "@angular/router"

@Component({
  selector: "app-home",
  standalone: true,
  // Chỉ cần RouterLink để nút "Khám phá" hoạt động
  imports: [RouterLink],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"], // Đảm bảo là styleUrls
})
export class HomeComponent {
  // Không cần constructor, ngOnInit hay bất kỳ thuộc tính nào khác.
  // Component này giờ chỉ chịu trách nhiệm hiển thị template tĩnh.
  constructor() {}
}
