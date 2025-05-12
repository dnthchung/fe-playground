// services/todoService.js
import axios from "axios"

const API_URL = "http://localhost:3001"

export const todoService = {
  getTodos: async () => {
    const response = await axios.get(`${API_URL}/todos`)
    return response.data
  },
  addTodo: async (todo) => {
    const response = await axios.post(`${API_URL}/todos`, todo)
    return response.data
  },
  updateTodo: async (todo) => {
    const response = await axios.put(`${API_URL}/todos/${todo.id}`, todo)
    return response.data
  },
  deleteTodo: async (id) => {
    await axios.delete(`${API_URL}/todos/${id}`)
    return id
  },
}
