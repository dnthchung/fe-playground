// redux/sagas/rootSaga.js
import { all } from "redux-saga/effects"
import { todoWatcherSaga } from "./todoSaga"

export default function* rootSaga() {
  yield all([todoWatcherSaga()])
}
