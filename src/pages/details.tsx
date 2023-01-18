import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { pokemonServices } from "../services/pokemonServices";

import { PokemonDetails } from "../components/PokemonDetails";
import { Header } from "../components/Header";

import { IPokeInfo, initialPokeInfo } from "../models/IPokeInfos";

export const Details = () => {
  const [pokemonInfo, setPokemonInfo] = useState<IPokeInfo>(initialPokeInfo);
  const [erroMsg, setErroMsg] = useState<string>("");
  const { id } = useParams();

  useEffect(() => {
    pokemonServices
      .getPokemonInfos<IPokeInfo>(id)
      .then((res) => setPokemonInfo(res))
      .catch((error: Error) => setErroMsg(error.message));
  }, []);

  return (
    <section className="w-full h-full">
      <Header />
      {erroMsg.length > 0 ? (
        <h2 className="text-4xl text-white text-center uppercase">{erroMsg}</h2>
      ) : null}
      <PokemonDetails pokemon={pokemonInfo} />
    </section>
  );
};
