// redux/sagas/todoSaga.js
import { call, put, takeLatest } from "redux-saga/effects"
import { todoService } from "../../services/todoService"
import {
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
} from "../slices/todoSlice"

// Worker Sagas
function* fetchTodosSaga() {
  try {
    const todos = yield call(todoService.getTodos)
    yield put(fetchTodosSuccess(todos))
  } catch (error) {
    yield put(fetchTodosFailure(error.message))
  }
}

function* addTodoSaga(action) {
  try {
    const newTodo = yield call(todoService.addTodo, action.payload)
    yield put(addTodoSuccess(newTodo))
  } catch (error) {
    yield put(addTodoFailure(error.message))
  }
}

function* updateTodoSaga(action) {
  try {
    const updatedTodo = yield call(todoService.updateTodo, action.payload)
    yield put(updateTodoSuccess(updatedTodo))
  } catch (error) {
    yield put(updateTodoFailure(error.message))
  }
}

function* deleteTodoSaga(action) {
  try {
    yield call(todoService.deleteTodo, action.payload)
    yield put(deleteTodoSuccess(action.payload))
  } catch (error) {
    yield put(deleteTodoFailure(error.message))
  }
}

// Watcher Saga
export function* todoWatcherSaga() {
  yield takeLatest(fetchTodosRequest.type, fetchTodosSaga)
  yield takeLatest(addTodoRequest.type, addTodoSaga)
  yield takeLatest(updateTodoRequest.type, updateTodoSaga)
  yield takeLatest(deleteTodoRequest.type, deleteTodoSaga)
}
