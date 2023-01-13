import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { pokemonServices } from "../services/pokemonServices";

import { PokemonDetails } from "../components/PokemonDetails";
import { Header } from "../components/Header";

import { IPokeInfo } from "../models/IPokeInfos";

export const Details = () => {
  const [pokemonInfo, setPokemonInfo] = useState<IPokeInfo>();
  const [erroMsg, setErroMsg] = useState<string>();
  const { id } = useParams();

  useEffect(() => {
    pokemonServices
      .getPokemonInfos(id)
      .then((res) => setPokemonInfo(res.data))
      .catch((err) => setErroMsg(err.message));
  }, []);

  return (
    <section className="w-full h-full">
      <Header />
      {erroMsg && <h2>{erroMsg}</h2>}
      <PokemonDetails data={pokemonInfo} />
    </section>
  );
};
