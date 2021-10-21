import {
    FETCH_ROOTS,
    FETCH_ROOTS_SUCCESS,
    FETCH_ROOTS_FAILURE,
  } from "../actions/roots/actionTypes";
  
  import { RootsActions, RootsState } from "../actions/roots/types";
  
  const initialState: RootsState = {
    isLoading: true,
    payload: null,
    error: null,
  };
  
  export default (state = initialState, action: RootsActions) => {
    switch (action.type) {
      case FETCH_ROOTS:
        return {
          ...state,
          isLoading: true,
        };
      case FETCH_ROOTS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          payload: action.payload,
        };
      case FETCH_ROOTS_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.error,
        };
      default:
        return {
          ...state,
        };
    }
  };