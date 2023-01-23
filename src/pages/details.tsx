import { pokemonAPI } from "../services/pokemonAPI";
import { useGetPokemons } from "../hooks/useGetPokemons";
import { IPokeInfo } from "../models/IPokeInfos";

import { PokemonDetails } from "../components/PokemonDetails";
import { Header } from "../components/Header";

export const Details = () => {
  const { pokemons, erroMsg } = useGetPokemons<IPokeInfo>(
    pokemonAPI.getPokemonInfos
  );

  return (
    <section className="w-full h-full">
      <Header />
      {erroMsg.length > 0 && (
        <h2 className="text-4xl text-white text-center uppercase">{erroMsg}</h2>
      )}
      {pokemons && <PokemonDetails pokemon={pokemons} />}
    </section>
  );
};
