import axios from "axios";

export class pokemonServices {
  private static URL: string = "https://pokeapi.co/api/v2/pokemon";

  public static getAllPokemons<T>(): Promise<T> {
    let pokemonsURL: string = `${this.URL}`;
    return axios.get(pokemonsURL).then((res) => res.data);
  }

  public static getPagesOrDetails<T>(data: string): Promise<T> {
    let pageURL: string = `${data}`;
    return axios.get(pageURL).then((res) => res.data);
  }

  public static getPokemonInfos<T>(data?: string): Promise<T> {
    let pokemonURL: string = `${this.URL}/${data}`;
    return axios.get(pokemonURL).then((res) => res.data);
  }
}
