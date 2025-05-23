// components/TodoList.jsx
import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux" // sẽ sử dụng useDispatch và useSelector với Redux Toolkit.
import { fetchTodosRequest } from "../redux/slices/todoSlice"
import TodoItem from "./TodoItem"

const TodoList = () => {
  // Trong TodoList.jsx, chúng ta sử dụng useDispatch để gửi action đến Redux store và useSelector để lấy trạng thái từ store.
  const dispatch = useDispatch() // gửi action đến store
  const { todos, loading, error } = useSelector((state) => state.todos) // lấy trạng thái từ store

  // Log khi component render lại
  useEffect(() => {
    console.log("TodoList component rendered")
  }, [todos]) // Chỉ log khi todos thay đổi

  useEffect(() => {
    dispatch(fetchTodosRequest())
  }, [dispatch])

  if (loading) {
    return (
      <div className="flex justify-center p-4">
        <div className="loader"></div>
      </div>
    )
  }

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>
  }

  return <div>{todos.length === 0 ? <div className="p-4 text-center text-gray-500">No todos found. Add one!</div> : todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}</div>
}

export default TodoList
