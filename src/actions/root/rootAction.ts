import { EnumRootType, RootResponse } from "./types";
import {
    FETCH_ROOT,
    FETCH_ROOT_FAILURE,
    FETCH_ROOT_SUCCESS,
  } from "./actionTypes";
  import {
    FetchRootRequest,
    FetchRootSuccess,
    FetchRootFailure,
  } from "./types";
  
  export const fetchRootRequest = (root: EnumRootType): FetchRootRequest => ({
    type: FETCH_ROOT,
    payload: root
  });
  
  export const fetchRootSuccess = (
    payload: RootResponse
  ): FetchRootSuccess => ({
    type: FETCH_ROOT_SUCCESS,
    payload,
  });
  
  export const fetchRootFailure = (
    payload: any
  ): FetchRootFailure => ({
    type: FETCH_ROOT_FAILURE,
    payload,
  });