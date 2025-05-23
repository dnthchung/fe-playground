// redux/slices/todoSlice.js
//tạo ra một slice (một phần của state) mà không phải viết reducer và action types riêng biệt.
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  todos: [],
  loading: false,
  error: null,
}

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // Actions for API requests
    fetchTodosRequest: (state) => {
      console.log("Fetching todos...")
      state.loading = true
      state.error = null
    },
    fetchTodosSuccess: (state, action) => {
      console.log("Todos fetched successfully:", action.payload)
      state.todos = action.payload
      state.loading = false
    },
    fetchTodosFailure: (state, action) => {
      console.error("Error fetching todos:", action.payload)
      state.loading = false
      state.error = action.payload
    },

    // Add todo
    addTodoRequest: (state, action) => {
      console.log("Adding todo:", action.payload)
      state.loading = true
      state.error = null
    },
    addTodoSuccess: (state, action) => {
      state.todos.push(action.payload)
      state.loading = false
    },
    addTodoFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },

    // Update todo
    updateTodoRequest: (state, action) => {
      console.log("Updating todo:", action.payload)
      state.loading = true
      state.error = null
    },
    updateTodoSuccess: (state, action) => {
      console.log("Todo updated successfully:", action.payload)
      const index = state.todos.findIndex((todo) => todo.id === action.payload.id)
      if (index !== -1) {
        state.todos[index] = action.payload
      }
      state.loading = false
    },
    updateTodoFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },

    // Delete todo
    deleteTodoRequest: (state, action) => {
      state.loading = true
      state.error = null
    },
    deleteTodoSuccess: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
      state.loading = false
    },
    deleteTodoFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const {
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchTodosFailure,
  addTodoRequest,
  addTodoSuccess,
  addTodoFailure,
  updateTodoRequest,
  updateTodoSuccess,
  updateTodoFailure,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoFailure,
} = todoSlice.actions

export default todoSlice.reducer
