import axios from "axios";
import { IPokeInfo } from "../models/IPokeInfos";
import { IPokemons } from "../models/IPokState";

const URL: string = "https://pokeapi.co/api/v2/pokemon";

export class pokemonAPI {
  public static getAllPokemons(): Promise<IPokemons> {
    let pokemonsURL: string = URL;
    return axios.get(pokemonsURL).then((res) => res.data);
  }

  public static getPagesOrDetails<T>(data: string): Promise<T> {
    let pageURL: string = `${data}`;
    return axios.get(pageURL).then((res) => res.data);
  }

  public static getPokemonInfos(data?: string): Promise<IPokeInfo> {
    let pokemonURL: string = `${URL}/${data}`;
    return axios.get(pokemonURL).then((res) => res.data);
  }
}
