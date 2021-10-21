import {
    FETCH_ROOT,
    FETCH_ROOT_SUCCESS,
    FETCH_ROOT_FAILURE,
  } from "./actionTypes";
  
  export interface Film {
    characters: string[];
    director: string;
    edited: string;
    episode_id: number;
    opening_crawl: string;
    created: string;
    producer: string;
    planets: string[];
    release_date: string;
    species: string[];
    url: string;
    starships: string[];
    vehicles: string[];
    title: string;
  }

  export interface Species {
    average_height: string;
    average_lifespan: string;
    classification: string;
    created: string;
    designation: string;
    edited: string;
    eye_colors: string;
    hair_colors: string;
    homeworld: string;
    language: string;
    name: string;
    people: string[];
    films: string[];
    skin_colors: string;
    url: string;
  }
  
  export interface Person {
    eye_color: string;
    films: string[];
    hair_color: string;
    height: string;
    birth_year: string;
    created: string;
    homeworld: string;
    gender: string;
    species: string[];
    mass: string;
    vehicles: string[];
    edited: string;
    name: string;
    skin_color: string;
    starships: string[];
    url: string;
  }

  export interface Starship {
    MGLT: string;
    cargo_capacity: string;
    consumables: string;
    cost_in_credits: string;
    created: string;
    crew: string;
    edited: string;
    hyperdrive_rating: string;
    length: string;
    manufacturer: string;
    max_atmosphering_speed: string;
    model: string;
    name: string;
    passengers: string;
    films: string[];
    pilots: string[];
    starship_class: string;
    url: string;
  }

  export interface Vehicle {
    cargo_capacity: string;
    consumables: string;
    cost_in_credits: string;
    created: string;
    crew: string;
    edited: string;
    length: string;
    manufacturer: string;
    max_atmosphering_speed: string;
    model: string;
    name: string;
    passengers: string;
    pilots: string[];
    films: string;
    url: string;
    vehicle_class: string;
  }

  export interface Planet {
    climate: string;
    created: string;
    diameter: string;
    edited: string;
    films: string[];
    gravity: string;
    name: string;
    orbital_period: string;
    population: string;
    residents: string[];
    rotation_period: string;
    surface_water: string;
    terrain: string;
    url: string;
  }

  export interface RootState {
    isLoading: boolean;
    payload: RootResponse | undefined;
    error: string | null;
  }

  
  export interface FetchRootRequest {
    type: typeof FETCH_ROOT;
    payload: EnumRootType
   }
  
   export enum EnumRootType {
    People = "people",
    Planets = "planets",
    Vehicles = "vehicles",
    Species = "species",
    Starships = "starships",
    Films = "films",
    Favourites = "favourites"
}

  export interface RootResponse {
    count: number
    previous: string | undefined
    next: string | undefined
    results: RootType[]
  }

  export type FetchRootSuccess = {
    type: typeof FETCH_ROOT_SUCCESS;
    payload: RootResponse
  };
  
  export type FetchRootFailure = {
    type: typeof FETCH_ROOT_FAILURE;
    payload: string | null;
  };
  
  export type RootActions =
     FetchRootRequest
    | FetchRootSuccess
    | FetchRootFailure;

  export type RootType = Person | Planet | Vehicle | Film | Species | Starship