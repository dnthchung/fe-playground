// components/TodoList.jsx
import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchTodosRequest } from "../redux/slices/todoSlice"
import TodoItem from "./TodoItem"

const TodoList = () => {
  const dispatch = useDispatch()
  const { todos, loading, error } = useSelector((state) => state.todos)

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
