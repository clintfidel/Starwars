import { createSelector } from "reselect";

import { AppState } from "../reducers";

const getRootsLoading = (state: AppState) => state.roots.isLoading;

const getRoots = (state: AppState) => state.roots.payload;

const getError = (state: AppState) => state.roots.error;

export const getRootsSelector = createSelector(getRoots, (roots) => roots);

export const getLoadingSelector = createSelector(
  getRootsLoading,
  (loading) => loading
);

export const getErrorSelector = createSelector(getError, (error) => error);
