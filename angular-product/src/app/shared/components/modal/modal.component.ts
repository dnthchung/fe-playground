// modal.component.ts
import { Component, EventEmitter, Input, Output } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-modal",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent {
  /**
   * Input để điều khiển trạng thái hiển thị của modal từ component cha.
   * Khi parent component gán [isOpen]="true", modal sẽ mở.
   */
  @Input() isOpen = false

  /**
   * Output để thông báo cho component cha rằng modal muốn đóng.
   * Parent component sẽ lắng nghe sự kiện (close)="handleClose()"
   */
  @Output() close = new EventEmitter<void>()

  constructor() {}

  /**
   * Phương thức này được gọi khi người dùng click nút X hoặc lớp nền mờ.
   * Nó sẽ phát ra sự kiện 'close'.
   */
  closeModal(): void {
    this.close.emit()
  }
}
