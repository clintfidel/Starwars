import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchRootFailure, fetchRootSuccess } from "../actions/root/rootAction";
import { FETCH_ROOT } from "../actions/root/actionTypes";
import { getRoot } from "../api";
import { RootResponse } from "../actions/root/types";

/*
  Worker Saga: Fired on FETCH_ROOTS action
*/
function* fetchRootSaga({ payload }: any) {
  try {
    const response:RootResponse = yield call(getRoot, payload);

    yield put(
      fetchRootSuccess(response)
    );
  } catch (e) {
    yield put(
      fetchRootFailure("An error just occured")
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_ROOTS` action.
  Allows concurrent increments.
*/
function* rootSaga() {
  yield all([takeLatest(FETCH_ROOT, fetchRootSaga)]);
}

export default rootSaga;