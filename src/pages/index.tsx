import { useState, useEffect, useMemo } from "react";
import { PaperPlaneRight } from "phosphor-react";

import pokemonlogo from "../assets/pokemonlogo.png";
import PokemonCard from "../components/Pokemon";

import { pokemonServices } from "../services/pokemonServices";
import { IPokemons, IState } from "../models/IPokState";

export const Home = () => {
  const [pokemons, setPokemons] = useState<IPokemons>();
  const [state, setState] = useState<IState>({
    loading: false,
    errorMsg: "",
  });
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>();

  useEffect(() => {
    setState({ ...state, loading: true });
    pokemonServices
      .getAllPokemons()
      .then((res) => {
        setPokemons(res.data);
        setState({ ...state, loading: false });
      })
      .catch((err) =>
        setState({ ...state, loading: false, errorMsg: err.message })
      );
  }, []);

  const nextPage = (data: string) => {
    pokemonServices.getPages(data).then((res) => setPokemons(res.data));
    setPage(page + 1);
  };

  const previousPage = (data: string) => {
    pokemonServices.getPages(data).then((res) => setPokemons(res.data));
    setPage(page - 1);
  };

  const { loading, errorMsg } = state;

  const pokemonFiltered = useMemo(() => {
    const lowerSearch = search?.toLowerCase() ?? ""; //optimization filter loop
    return pokemons?.results.filter((val) => {
      if (search === undefined) {
        return val;
      } else if (val.name.toLowerCase().includes(lowerSearch)) {
        return val;
      }
    });
  }, [pokemons, search]);

  return (
    <section className="w-full flex flex-col justify-center items-center px-2 py-2 text-white">
      <div className="flex flex-col justify-center items-center">
        <img src={pokemonlogo} alt="pokemon logo" className="w-1/2 mb-5" />
        <label className="mb-2">Pesquisar Pokemon</label>
        <input
          type="text"
          placeholder="EX: Charizard"
          onChange={(e) => setSearch(e.target.value)}
          className="px-2 py-2 w-[300px] text-black rounded outline-none"
        />
      </div>
      {loading && <h2>Loading...</h2>}
      {errorMsg && <h2>{errorMsg}</h2>}
      <div className="max-w-[1300px] h-80 flex justify-center items-center gap-4 flex-wrap border-[6px] px-6 py-6 mt-7 overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-[#414baa] scrollbar-thumb-rounded-full">
        {pokemonFiltered?.map((result) => (
          <PokemonCard key={result.name} data={result} />
        ))}
      </div>
      <footer className="flex justify-center items-center gap-4 mt-4">
        {pokemons?.previous ? (
          <button
            type="button"
            onClick={() => previousPage(pokemons?.previous)}
          >
            <PaperPlaneRight
              size={28}
              className="hover:text-blue-700 hover:transition-all hover:ease-in rotate-180"
            />
          </button>
        ) : (
          <button type="button" disabled={true}>
            <PaperPlaneRight size={28} className="rotate-180" />
          </button>
        )}
        <span className="text-lg">{page}</span>
        {pokemons?.next && (
          <button type="button" onClick={() => nextPage(pokemons?.next)}>
            <PaperPlaneRight
              size={28}
              className="hover:text-blue-700 hover:transition-all hover:ease-in"
            />
          </button>
        )}
      </footer>
    </section>
  );
};
