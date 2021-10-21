import { all, fork } from "redux-saga/effects";

import rootsSaga from "./roots";
import rootSaga from "./root";


export function* indexSaga() {
  yield all([fork(rootsSaga)]);
  yield all([fork(rootSaga)]);
}