import { Component } from "@angular/core"

@Component({
  selector: "app-todo",
  standalone: true,
  imports: [],
  templateUrl: "./todo.component.html",
  styleUrl: "./todo.component.scss",
})
export class TodoComponent {
  newTodo: string = ""
  todos: { text: string; completed: boolean }[] = []

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push({ text: this.newTodo.trim(), completed: false })
      this.newTodo = ""
    }
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1)
  }
}
