// redux/store.js
import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import todoReducer from "./slices/todoSlice"
import rootSaga from "./sagas/rootSaga"

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export default store
