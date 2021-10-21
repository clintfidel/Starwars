import { Roots } from "../actions/roots/types"
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchRootsFailure, fetchRootsSuccess } from "../actions/roots/rootsAction";
import { FETCH_ROOTS } from "../actions/roots/actionTypes";
import { getRoots } from "../api";

/*
  Worker Saga: Fired on FETCH_ROOTS action
*/
function* fetchRootsSaga() {
  try {
    const response: Roots = yield call(getRoots);
    yield put(
      fetchRootsSuccess(response)
    );
  } catch (e) {
    yield put(
      fetchRootsFailure("An error just occured")
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_ROOTS` action.
  Allows concurrent increments.
*/
function* rootsSaga() {
  yield all([takeLatest(FETCH_ROOTS, fetchRootsSaga)]);
}

export default rootsSaga;