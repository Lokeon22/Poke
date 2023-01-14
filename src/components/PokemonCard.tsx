import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IState } from "../models/IPokState";
import { pokemonServices } from "../services/pokemonServices";
import { IPokeInfo } from "../models/IPokeInfos";

import circle from "../assets/circle.svg";
import { HeartFavorites } from "./HeartFavorites";

interface DataProps {
  data: {
    name: string;
    url: string;
  };
}

const PokemonCard = ({ data }: DataProps) => {
  const [details, setDetails] = useState<IPokeInfo>();
  const [state, setState] = useState<IState>({
    loading: false,
    errorMsg: "",
  });

  useEffect(() => {
    pokemonServices
      .getPokemonsDetails(data.url)
      .then((res) => setDetails(res.data))
      .catch((err) => setState({ ...state, errorMsg: err.message }));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-[230px] h-[260px] px-4 py-4 bg-blue-600 rounded-md">
      {state.errorMsg && <h2>{state.errorMsg}</h2>}
      <div className="relative z-10 mb-2">
        <HeartFavorites details={details} />
        <Link to={`/details/${details?.id}`}>
          <img
            src={details?.sprites.other.home.front_default}
            alt={details?.name}
            className="max-w-[150px] cursor-pointer hover:scale-105 hover:transition-all hover:ease-in"
          />
        </Link>
        <img src={circle} className="w-28 h-28 absolute -z-10 left-5 top-10" />
      </div>
      <footer className="flex flex-col justify-center items-center text-white">
        <span className="text-2xl uppercase">{details?.name}</span>
        <span className="text-lg">XP: {details?.base_experience}</span>
      </footer>
    </div>
  );
};

export default React.memo(PokemonCard); // previne re-renders on PokemonCard
