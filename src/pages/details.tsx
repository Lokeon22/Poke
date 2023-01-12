import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { pokemonServices } from "../services/pokemonServices";

import { ArrowLeft, GithubLogo } from "phosphor-react";
import { PokemonDetails } from "../components/PokemonDetails";

import { IPokeInfo } from "../models/IPokeInfos";

export const Details = () => {
  const [pokemonInfo, setPokemonInfo] = useState<IPokeInfo>();
  const [erroMsg, setErroMsg] = useState<string>();
  const { id } = useParams();

  useEffect(() => {
    pokemonServices
      .pokemonDetail(id)
      .then((res) => setPokemonInfo(res.data))
      .catch((err) => setErroMsg(err.message));
  }, []);

  return (
    <section className="w-full h-full">
      <header className="flex justify-between items-center px-4 py-4">
        <Link to="/">
          <ArrowLeft
            size={26}
            className="text-blue-400 cursor-pointer hover:text-blue-500 hover:transition-all hover:ease-in"
          />
        </Link>
        <a href="https://github.com/Lokeon22" target="_blank">
          <GithubLogo
            size={22}
            className="text-slate-100 hover:opacity-80 hover:transition-all hover:ease-in"
          />
        </a>
      </header>
      {erroMsg && <h2>{erroMsg}</h2>}
      <PokemonDetails data={pokemonInfo} />
    </section>
  );
};
