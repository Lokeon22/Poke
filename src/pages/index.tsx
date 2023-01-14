import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { PaperPlaneRight } from "phosphor-react";

import { NotFound } from "../components/NotFound";
import { pokemonServices } from "../services/pokemonServices";
import { IPokemons, IState } from "../models/IPokState";

import pikachulogo from "../assets/pikachulogo.png";
import pokemonlogo2 from "../assets/pokemonlogo2.svg";
import PokemonCard from "../components/PokemonCard";

export const Home = () => {
  const [pokemons, setPokemons] = useState<IPokemons>();
  const [state, setState] = useState<IState>({
    loading: false,
    errorMsg: "",
  });
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");

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
    const lowerSearch = search.toLowerCase(); //optimization filter loop
    return pokemons?.results.filter((val) => {
      if (search === undefined) {
        return val;
      } else if (val.name.toLowerCase().includes(lowerSearch)) {
        return val;
      }
    });
  }, [pokemons, search]);

  return (
    <section className="w-full flex flex-col justify-center items-center px-4 py-4 text-white">
      <div className="flex flex-col justify-center items-center">
        <img
          src={pokemonlogo2}
          alt="pokemon logo"
          className="sm:w-[60%] w-[90%] mt-2"
        />
        <img
          src={pikachulogo}
          alt="pokemon logo pikachu"
          className="sm:w-1/4 w-[40%] mb-4"
        />
        <label htmlFor="inputsearch" className="mb-2 text-center">
          Pesquisar Pokemon
        </label>
        <input
          id="inputsearch"
          type="text"
          placeholder="EX: Charizard"
          onChange={(e) => setSearch(e.target.value)}
          className="px-2 py-2 w-[300px] rounded sm:mb-2 mb-4 bg-transparent outline-none border border-blue-400 text-white border-opacity-90"
        />
      </div>
      <div className="xl:w-[67%] w-full flex">
        <Link to="/favorites">
          <p className="sm:text-xl text-lg font-semibold hover:text-yellow-300 hover:transition-all hover:ease-in">
            PokeFavorites
          </p>
        </Link>
      </div>
      {loading && <h2>Loading...</h2>}
      {errorMsg && <h2>{errorMsg}</h2>}
      <div className="max-w-[1300px] h-80 flex justify-center items-center gap-4 flex-wrap border-[6px] border-yellow-400 py-4 px-4 sm:px-6 sm:py-6 mt-2 overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-[#444fb1] scrollbar-thumb-rounded-full">
        {pokemonFiltered !== undefined && pokemonFiltered?.length > 0 ? (
          pokemonFiltered?.map((result) => (
            <PokemonCard key={result.name} data={result} />
          ))
        ) : (
          <NotFound />
        )}
      </div>
      <footer className="flex justify-center items-center gap-4 mt-4 sm:mb-0 mb-3">
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
