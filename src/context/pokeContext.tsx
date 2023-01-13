import React, { createContext, useContext, useState } from "react";
import { IPokeInfo } from "../models/IPokeInfos";

interface PokeContextProps {
  favorites: IPokeInfo[];
  setFavorites: React.Dispatch<React.SetStateAction<IPokeInfo[]>>;
}

interface PokeProviderProps {
  children: React.ReactNode;
}

export const PokeContext = createContext({} as PokeContextProps);

export const PokeProvider = ({ children }: PokeProviderProps) => {
  const [favorites, setFavorites] = useState<Array<IPokeInfo>>([]);

  return (
    <PokeContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </PokeContext.Provider>
  );
};

export const usePoke = () => {
  const context = useContext(PokeContext);
  return context;
};
