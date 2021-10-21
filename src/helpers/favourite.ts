import {  RootType } from '../actions/root/types';

export const getFavourited = () => {
  let favouritedFromLocalStorage: string | null = localStorage.getItem('favourited');
  let favourited = favouritedFromLocalStorage ? JSON.parse(favouritedFromLocalStorage) : {};
  return favourited
}

export const addFavourites = (root: RootType, setIsFavourited: Function) => {
  const favourited = getFavourited();
  favourited[root.url] = root;
  localStorage.setItem('favourited', JSON.stringify(favourited));
  setIsFavourited(true)
}

export const removeFavourite = (root: RootType, setIsFavourited: Function) => {
  const favourited = getFavourited();
  delete favourited[root.url];
  localStorage.setItem('favourited', JSON.stringify(favourited));
  setIsFavourited(false);
}