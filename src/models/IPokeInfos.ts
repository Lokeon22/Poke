export interface IPokeInfo {
  id: number;
  name: string;
  base_experience: number;
  sprites: Other;
  abilities?: Habi[];
  types?: Type[];
  weight: number;
}

interface Other {
  other: {
    home: {
      front_default: string;
    };
  };
}

interface Habi {
  ability: {
    name: string;
  };
}

interface Type {
  type: {
    name: string;
  };
}
