// components/TodoForm.jsx
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodoRequest } from "../redux/slices/todoSlice"

const TodoForm = () => {
  const [title, setTitle] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return

    dispatch(
      addTodoRequest({
        title,
        completed: false,
      }),
    )
    setTitle("")
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex items-center">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new todo..."
          className="flex-grow p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-r hover:bg-blue-600 focus:outline-none">
          Add
        </button>
      </div>
    </form>
  )
}

export default TodoForm
