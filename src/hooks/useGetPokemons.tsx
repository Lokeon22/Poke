import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function useGetPokemons<T>(
  fetchData: (id: string | undefined) => Promise<T>
) {
  const [pokemons, setPokemons] = useState<T>();
  const [erroMsg, setErroMsg] = useState<string>("");

  const { id } = useParams();

  useEffect(() => {
    fetchData(id) //method from pokemonAPI / axios
      .then((res) => setPokemons(res))
      .catch((error: Error) => setErroMsg(error.message));
  }, []);

  return {
    pokemons,
    setPokemons,
    erroMsg,
  };
}
