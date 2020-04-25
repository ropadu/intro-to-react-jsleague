import React, { createContext, useContext } from "react";

import { useLocalStorage } from "./useLocalStorage";
import { makeId } from "./useMovie";

import defaultData from "../data/movies.json";

(() => {
  const tmpMovies = localStorage.getItem("app:movies");
  if (!tmpMovies) {
    defaultData.movies.forEach(({ id, ...rest }) => {
      console.groupCollapsed("Seeding Movie %s", id);
      console.log("ID: %s", id);
      console.log("Data", { id, ...rest });
      console.groupEnd();
      window.localStorage.setItem(
        `app:${makeId(id)}`,
        JSON.stringify({ id, ...rest })
      );
    });
    localStorage.setItem(
      "app:movies",
      JSON.stringify(defaultData.movies.map(({ id }) => id))
    );
  }
})();

const AppStateContext = createContext([]);

export const AppStateProvider = ({ children }) => {
  const [ids, setIds] = useLocalStorage("movies", []);
  return (
    <AppStateContext.Provider value={{ ids, setIds }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => useContext(AppStateContext);
