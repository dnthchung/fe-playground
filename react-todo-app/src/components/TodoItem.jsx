// components/TodoItem.jsx
import React from "react"
import { useDispatch } from "react-redux"
import { updateTodoRequest, deleteTodoRequest } from "../redux/slices/todoSlice"

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch()

  const handleToggleComplete = () => {
    dispatch(
      updateTodoRequest({
        ...todo,
        completed: !todo.completed,
      }),
    )
  }

  const handleDelete = () => {
    dispatch(deleteTodoRequest(todo.id))
  }

  return (
    <div className="flex items-center justify-between p-4 mb-2 border rounded shadow-sm bg-white">
      <div className="flex items-center">
        <input type="checkbox" checked={todo.completed} onChange={handleToggleComplete} className="mr-2 h-5 w-5 text-blue-600" />
        <span className={`${todo.completed ? "line-through text-gray-500" : "text-gray-800"}`}>{todo.title}</span>
      </div>
      <button onClick={handleDelete} className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none">
        Delete
      </button>
    </div>
  )
}

export default TodoItem
