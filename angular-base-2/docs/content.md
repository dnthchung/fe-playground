# Component

## 1. Component Anatomy

Mỗi component bao gồm ba phần chính:

* **Lớp TypeScript**: chứa logic như xử lý sự kiện và gọi API.
* **Template HTML**: xác định giao diện hiển thị.
* **CSS selector**: định nghĩa tag HTML dùng để nhúng component (\[angular.dev]\[1]).

Bạn khai báo một component sử dụng decorator `@Component({...})`, chứa metadata là các cấu hình selector, template, styles,...

---

## 2. Creating Components

Tạo component thông qua CLI (`ng generate component`) hoặc tự định nghĩa với `@Component()`. Cấu hình tối thiểu gồm:

* `selector`
* `template` hoặc `templateUrl`
* `styles` hoặc `styleUrls`

Điều này đảm bảo component có đủ template, style, logic để hoạt động .

---

## 3. Metadata

Metadata là đối tượng truyền vào decorator `@Component()`, dùng để định nghĩa hành vi và giao diện của component.

### Cấu trúc metadata đầy đủ:

```ts
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>{{ title }}</h2>`,
  styles: [`h2 { color: teal; }`],
  providers: [CardService],
  viewProviders: [ViewLoggingService],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
```

---

### 📌 Chi tiết từng metadata:

#### 4. Selector

Xác định tag HTML để sử dụng component:

```ts
selector: 'app-user-profile'
```

Dùng trong template cha:

```html
<app-user-profile></app-user-profile>
```

---

#### 5. Template

Nội dung HTML có thể:

* Inline: `template: '<p>Hello!</p>'`
* File ngoài: `templateUrl: './user-profile.component.html'`

---

#### 6. Styles

CSS áp dụng riêng cho component:

* Inline: `styles: ['h1 { color: red; }']`
* File ngoài: `styleUrls: ['./style.css']`

---

#### 7. Standalone

Cho phép component không cần `NgModule`:

```ts
standalone: true
```

Kết hợp với `imports` để khai báo dependencies.

---

#### 8. Imports

Khai báo các component, directive, pipe cần dùng trong template:

```ts
imports: [CommonModule, OtherComponent]
```

---

#### 9. Provider

Khai báo service dùng cho component và children:

```ts
providers: [MyService]
```

---

#### 10. viewProviders

Giống `providers`, nhưng **chỉ dùng cho view children**, không áp dụng với content projected qua `<ng-content>`:

```ts
viewProviders: [ViewScopedService]
```

---

#### 11. Encapsulation

Chiến lược kiểm soát phạm vi CSS:

```ts
encapsulation: ViewEncapsulation.Emulated  // mặc định
encapsulation: ViewEncapsulation.None      // toàn cục
encapsulation: ViewEncapsulation.ShadowDom // dùng Shadow DOM thật
```

---

#### 12. changeDetection

Chiến lược cập nhật UI:

```ts
changeDetection: ChangeDetectionStrategy.Default  // luôn kiểm tra
changeDetection: ChangeDetectionStrategy.OnPush   // tối ưu, chỉ khi input thay đổi
```

---

### Tổng kết:

| STT | Mục tiêu            | Nội dung chính                                     |
| --- | ------------------- | -------------------------------------------------- |
| 1   | Component Anatomy   | Cấu trúc gồm TS class, template, selector          |
| 2   | Creating Components | CLI hoặc tự định nghĩa với `@Component`            |
| 3   | Metadata            | Định nghĩa hành vi & giao diện thông qua decorator |
| 4   | Selector            | Tên tag HTML của component                         |
| 5   | Template            | Giao diện hiển thị                                 |
| 6   | Styles              | CSS riêng cho component                            |
| 7   | Standalone          | Không cần module                                   |
| 8   | Imports             | Các dependency dùng trong template                 |
| 9   | Provider            | DI cho component và con của nó                     |
| 10  | viewProvider        | DI chỉ trong phần view của template                |
| 11  | Encapsulation       | Kiểm soát phạm vi áp dụng CSS                      |
| 12  | changeDetection     | Chiến lược kiểm tra và cập nhật dữ liệu            |

---

