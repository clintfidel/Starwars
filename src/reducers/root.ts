import {
    FETCH_ROOT,
    FETCH_ROOT_SUCCESS,
    FETCH_ROOT_FAILURE,
  } from "../actions/root/actionTypes";
  
  import { RootActions, RootState } from "../actions/root/types";
  
  const initialState: RootState = {
    isLoading: true,
    payload: {
      count: 0,
      previous: undefined,
      next: undefined,
      results: []
    },
    error: null
  };
  
  export default (state: RootState = initialState, action: RootActions): RootState => {
    switch (action.type) {
      case FETCH_ROOT:
        return {
          ...state,
          isLoading: true,
          payload: undefined,
          error: null,
        };
      case FETCH_ROOT_SUCCESS:
        return {
          ...state,
          isLoading: false,
          payload: action.payload,
          error: null,
        };
      case FETCH_ROOT_FAILURE:
        return {
          ...state,
          isLoading: false,
          payload: undefined,
          error: action.payload,
        };
      default:
        return {
          ...state,
        };
    }
  };