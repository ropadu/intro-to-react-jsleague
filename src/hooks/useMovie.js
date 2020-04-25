import { useLocalStorage } from "./useLocalStorage";

export const makeId = id => `movie-${id}`;

export const useMovie = id => useLocalStorage(makeId(id), null);
