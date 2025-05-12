// App.jsx
import React from "react"
import { Provider } from "react-redux"
import store from "./redux/store"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

function App() {
  return (
    <Provider store={store}>
      <div className="container mx-auto max-w-md p-4">
        <h1 className="text-2xl font-bold mb-6 text-center">Todo Management App</h1>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  )
}

export default App
