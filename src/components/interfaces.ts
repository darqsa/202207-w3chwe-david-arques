export interface PokemonList {
  count: number;
  next: string;
  previous: string;
  results: [
    {
      name: string;
      url: string;
    }
  ];
}

export interface PokemonInfo {
  name: string;
  id: number;
  sprite: string;
  type: string;
  height: number;
  weight: number;
  abilities: object[];
}
