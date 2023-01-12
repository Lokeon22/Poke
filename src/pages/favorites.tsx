import { usePoke } from "../context/pokeContext";

export const Favorites = () => {
  const { favorites, setFavorites } = usePoke();

  return <section className="w-full h-full text-white"></section>;
};
