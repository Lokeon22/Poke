import { useRef } from "react";
import { usePoke } from "../context/pokeContext";

import { ArrowLeft } from "phosphor-react";
import { Header } from "../components/Header";

export const Favorites = () => {
  const { favorites } = usePoke();
  const divRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (divRef.current !== null)
      divRef.current.scrollLeft += divRef.current.offsetWidth;
  };

  const previusSlide = () => {
    if (divRef.current !== null)
      divRef.current.scrollLeft -= divRef.current.offsetWidth;
  };

  return (
    <div className="w-full h-full text-white">
      <Header />
      <h2 className="text-start px-5 mt-10 mb-10 text-2xl">Poke Favorites</h2>
      <section className="flex justify-center items-center gap-5 mx-auto my-0 max-w-[400px]">
        {favorites.length > 1 ? (
          <>
            <button className="md:flex hidden cursor-pointer">
              <ArrowLeft size={32} onClick={previusSlide} />
            </button>
          </>
        ) : null}
        {favorites.length > 0 ? (
          <>
            <div
              className="flex flex-nowrap overflow-x-auto md:scrollbar-hide scrollbar-default scroll-smooth"
              ref={divRef}
            >
              {favorites.map((fav) => (
                <div key={fav.id} className="w-full flex flex-col items-center">
                  <img
                    src={fav.sprites.other.home.front_default}
                    className="max-w-[250px] sm:max-w-[300px]"
                  />
                  <h2 className="text-2xl mt-2 capitalize">{fav.name}</h2>
                </div>
              ))}
            </div>
          </>
        ) : (
          <h2>Nenhum Pokemon Favorito</h2>
        )}
        {favorites.length > 1 ? (
          <>
            <button
              className="md:flex hidden cursor-pointer"
              onClick={nextSlide}
            >
              <ArrowLeft size={32} className="rotate-180" />
            </button>
          </>
        ) : null}
      </section>
    </div>
  );
};
