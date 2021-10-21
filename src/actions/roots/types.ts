import {
    FETCH_ROOTS,
    FETCH_ROOTS_SUCCESS,
    FETCH_ROOTS_FAILURE,
  } from "./actionTypes";
  
  export interface Roots {
    planets: string;
    people: string;
    films: string;
    species: string;
    starships: string;
    vehicles: string
  }
  
  export interface RootsState {
    isLoading: boolean;
    payload: Roots | null;
    error: string | null;
  }

  
  export interface FetchRootsRequest {
    type: typeof FETCH_ROOTS;
  }
  
  export type FetchRootsSuccess = {
    type: typeof FETCH_ROOTS_SUCCESS;
    payload: Roots;
  };
  
  export type FetchRootsFailure = {
    type: typeof FETCH_ROOTS_FAILURE;
    error: string | null;
  };
  
  export type RootsActions =
    | FetchRootsRequest
    | FetchRootsSuccess
    | FetchRootsFailure;