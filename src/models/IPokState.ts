export interface IPokemons {
  count: number;
  next: string;
  previous: string;
  results: Results[];
}

interface Results {
  name: string;
  url: string;
}

export interface PokemonDetails {
  id: number;
  name: string;
  base_experience: number;
  sprites: Other;
}

interface Other {
  other: {
    home: {
      front_default: string;
    };
  };
}

export interface IState {
  loading: boolean;
  errorMsg: string;
}
