//file : app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from './shared/header-layout/header-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderLayoutComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  //1. Dynamic Text (Hiển thị dữ liệu - Interpolation)
  title = 'Angular Shop';
  productCount = 5;
  userName = 'Long Nguyen';

  //2. Property Binding (Ràng buộc thuộc tính - [property])
  //Thực tế: Dùng để bật/tắt nút, thay ảnh sản phẩm, thay đổi kích thước...
  isLoggedIn = true;
  productImage = 'assets/phone.png';

  //3. Attribute Binding (attr.*)
  productId = 'A123';

  //4. Style Binding (Thay đổi màu sắc, kích thước)

  //5. Event Binding (Xử lý sự kiện - (event))
  cartCount = 0;

  products = [
    {
      id: 'SP001',
      name: 'Điện thoại iPhone 15',
      price: 29900000,
      image: 'assets/iphone.png',
    },
    {
      id: 'SP002',
      name: 'Tai nghe Bluetooth',
      price: 790000,
      image: 'assets/headphone.png',
    },
    {
      id: 'SP003',
      name: 'Đồng hồ thông minh',
      price: 1990000,
      image: 'assets/watch.png',
    },
  ];

  addToCart() {
    this.cartCount++;
  }
}
