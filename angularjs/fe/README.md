Rất tốt! Dưới đây là toàn bộ nội dung chi tiết cho:

---

## ✅ 1. Component: `TodoItemComponent`

**`shared/todo-item/todo-item.component.ts`**

```ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo!: { title: string; completed: boolean };
  @Output() delete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit();
  }
}
```

**`shared/todo-item/todo-item.component.html`**

```html
<li>
  <input type="checkbox" [(ngModel)]="todo.completed" />
  <span [ngClass]="{ done: todo.completed }">{{ todo.title }}</span>
  <button (click)="onDelete()">🗑️</button>
</li>
```

**`shared/todo-item/todo-item.component.scss`**

```scss
.done {
  text-decoration: line-through;
  color: gray;
}
```

---

## ✅ 2. Component: `TodoListComponent`

**`shared/todo-list/todo-list.component.ts`**

```ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() todos: { title: string; completed: boolean }[] = [];
  @Output() delete = new EventEmitter<number>();

  deleteTodo(index: number) {
    this.delete.emit(index);
  }
}
```

**`shared/todo-list/todo-list.component.html`**

```html
<ul>
  <app-todo-item
    *ngFor="let todo of todos; let i = index"
    [todo]="todo"
    (delete)="deleteTodo(i)">
  </app-todo-item>
</ul>

<p *ngIf="todos.length === 0">🎉 Không còn việc nào!</p>
```

**`shared/todo-list/todo-list.component.scss`**

```scss
ul {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}

p {
  text-align: center;
  color: #888;
  margin-top: 1rem;
}
```

---

## ✅ 3. Service: `TodoService`

**Lệnh CLI tạo service:**

```bash
ng generate service shared/todo
```

**`shared/todo.service.ts`**

```ts
import { Injectable } from '@angular/core';

export interface Todo {
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];

  getTodos(): Todo[] {
    return [...this.todos];
  }

  addTodo(title: string) {
    this.todos.push({ title, completed: false });
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }

  toggleTodo(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }

  setTodos(todos: Todo[]) {
    this.todos = [...todos];
  }
}
```

> Nếu muốn lưu vào `localStorage`, mình có thể giúp bạn mở rộng service này.

---

## ✅ 4. Cập nhật `AppComponent` để sử dụng service và components:

Bạn cần:

* Import `TodoListComponent`
* Inject `TodoService`
* Điều phối logic thêm, xoá todo

> Mình sẽ giúp bạn cập nhật toàn bộ `AppComponent` nếu bạn xác nhận là đã tạo xong 2 component và service rồi nhé.

---

Bạn đã sẵn sàng để mình cập nhật `AppComponent` chưa? Hay muốn mình giúp tiếp phần lưu vào `localStorage` luôn?
