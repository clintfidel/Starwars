import {
    FETCH_ROOTS,
    FETCH_ROOTS_FAILURE,
    FETCH_ROOTS_SUCCESS,
  } from "./actionTypes";
  import {
    FetchRootsRequest,
    FetchRootsSuccess,
    FetchRootsFailure,
    Roots
  } from "./types";
  
  export const fetchRootsRequest = (): FetchRootsRequest => ({
    type: FETCH_ROOTS
  });
  
  export const fetchRootsSuccess = (
    payload: Roots
  ): FetchRootsSuccess => ({
    type: FETCH_ROOTS_SUCCESS,
    payload,
  });
  
  export const fetchRootsFailure = (
    error: string | null
  ): FetchRootsFailure => ({
    type: FETCH_ROOTS_FAILURE,
    error,
  });