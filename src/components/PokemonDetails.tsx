import pokemonlogo2 from "../assets/pokemonlogo2.svg";
import { IPokeInfo } from "../models/IPokeInfos";
import { PokeInfos } from "./PokeInfos";

interface DataProps {
  data?: IPokeInfo;
}

export const PokemonDetails = ({ data }: DataProps) => {
  return (
    <section className="flex flex-col justify-center items-center mt-8 sm:py-0 sm:px-0 py-2 px-2">
      <img src={pokemonlogo2} className="w-[550px]" alt="Logo Pokemon" />
      <div className="flex sm:flex-row flex-col justify-center items-center sm:gap-4 gap-6">
        <img
          src={data?.sprites.other.home.front_default}
          alt={data?.name}
          className="sm:w-[320px] w-[290px] hover:rotate-3 hover:transition-all hover:ease-in hover:scale-110"
        />
        <footer className="flex flex-col items-center text-xl text-white gap-1 sm:mb-0 mb-4">
          <h2 className="text-4xl sm:text-5xl uppercase sm:mb-1 mb-2">
            {data?.name}
          </h2>
          <span>
            <strong className="text-blue-400">XP:</strong>{" "}
            {data?.base_experience}
          </span>
          <PokeInfos title="Type">
            {data?.types?.map(({ type }) => (
              <div key={type.name}>
                <span className="capitalize">| {type.name}</span>
              </div>
            ))}
          </PokeInfos>

          <PokeInfos title="Ability">
            {data?.abilities?.map(({ ability }) => (
              <div key={ability.name}>
                <span className="capitalize">| {ability.name}</span>
              </div>
            ))}
          </PokeInfos>
          <span>
            <strong className="text-blue-400">Weight:</strong> {data?.weight}
          </span>
        </footer>
      </div>
    </section>
  );
};
