import React, { useState } from "react";
import { pokemonAPI } from "../services/pokemonAPI";
import { IPokemons } from "../models/IPokState";

export function usePages(
  setPokemons: React.Dispatch<React.SetStateAction<IPokemons | undefined>>
) {
  const [page, setPage] = useState<number>(1);

  const nextPage = (data: string) => {
    pokemonAPI
      .getPagesOrDetails<IPokemons>(data)
      .then((res) => setPokemons(res));
    setPage(page + 1);
  };

  const previousPage = (data: string) => {
    pokemonAPI
      .getPagesOrDetails<IPokemons>(data)
      .then((res) => setPokemons(res));
    setPage(page - 1);
  };

  return {
    nextPage,
    previousPage,
    page,
  };
}
