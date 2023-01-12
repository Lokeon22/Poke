import axios from "axios";

export class pokemonServices {
  private static URL: string = "https://pokeapi.co/api/v2/pokemon";

  public static getAllPokemons() {
    let pokemonsURL: string = `${this.URL}`;
    return axios.get(pokemonsURL);
  }

  public static getPages(data?: string) {
    let pageURL: string = `${data}`;
    return axios.get(pageURL);
  }

  public static getPokemonsDetails(data: string) {
    let pokemonsURL: string = `${data}`;
    return axios.get(pokemonsURL);
  }

  public static getPokemonInfos(data?: string) {
    let pokemonURL: string = `${this.URL}/${data}`;
    return axios.get(pokemonURL);
  }
}
