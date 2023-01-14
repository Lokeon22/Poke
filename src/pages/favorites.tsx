import { useRef } from "react";
import { Link } from "react-router-dom";
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
      <h2 className="text-start px-5 mt-10 mb-10 text-2xl max-[340px]:mb-5">
        Poke Favorites
      </h2>
      <section className="flex justify-center items-center gap-5 mx-auto my-0 max-w-[400px] sm:max-w-[450px]">
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
                    className="max-w-[280px] sm:max-w-[400px]"
                  />
                  <h2 className="text-3xl sm:text-4xl mt-2 capitalize">
                    {fav.name}
                  </h2>
                  <Link to={`/details/${fav.id}`}>
                    <span className="text-sm hover:text-slate-300 hover:transition-all hover:ease-in">
                      Ver detalhes
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </>
        ) : (
          <h2 className="sm:text-2xl text-xl">Nenhum Pokemon Favorito</h2>
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
