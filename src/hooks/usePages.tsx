import React, { useState } from "react";
import { pokemonAPI } from "../services/pokemonAPI";
import { IPokemons } from "../models/IPokState";

export function usePages(
  setPokemons: React.Dispatch<React.SetStateAction<IPokemons | undefined>>
) {
  const [page, setPage] = useState<number>(1);

  const pageNavigation = (data: string, pageNumber: number) => {
    pokemonAPI
      .getPagesOrDetails<IPokemons>(data)
      .then((res) => setPokemons(res));
    setPage(pageNumber);
  };

  return {
    pageNavigation,
    page,
  };
}
