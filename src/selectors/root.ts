import { createSelector } from "reselect";

import { AppState } from "../reducers";

const getRootLoading = (state: AppState) => state.root.isLoading;

const getRoot = (state: AppState) => state.root;

const getError = (state: AppState) => state.root.error;

export const getRootSelector = createSelector(getRoot, (root) => root);

export const getRootLoadingSelector = createSelector(
  getRootLoading,
  (loading) => loading
);

export const getRootErrorSelector = createSelector(getError, (error) => error);
