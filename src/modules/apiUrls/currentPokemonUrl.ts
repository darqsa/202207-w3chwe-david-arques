import pokemonList from "../pokemonList/pokemonList.js";

const currentPokemon = async (current: number) => {
  const list: string[] = await pokemonList();
  const resources: Response = await fetch(list[current]);

  const pokemonInfo = await resources.json();
  return pokemonInfo;
};
export default currentPokemon;
