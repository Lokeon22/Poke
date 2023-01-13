import { usePoke } from "../context/pokeContext";
import { IPokeInfo } from "../models/IPokeInfos";

import heart from "../assets/heart.svg";
import redheart from "../assets/redheart.svg";

interface HeartProps {
  details?: IPokeInfo;
}

export const HeartFavorites = ({ details }: HeartProps) => {
  const { favorites, setFavorites } = usePoke();

  function addFavorites(data: IPokeInfo | undefined) {
    if (data !== undefined) {
      setFavorites([...(favorites as []), data]);
    }
  }

  function removeFavorites(id: number | undefined) {
    setFavorites(favorites.filter((fav) => fav.id !== id));
  }

  const isFavorites = favorites.some((fav) => fav.id === details?.id);

  return (
    <img
      src={isFavorites ? redheart : heart}
      alt="heart"
      className="w-8 h-8 absolute left-[95%] -top-2 cursor-pointer"
      onClick={() =>
        isFavorites ? removeFavorites(details?.id) : addFavorites(details)
      }
    />
  );
};
