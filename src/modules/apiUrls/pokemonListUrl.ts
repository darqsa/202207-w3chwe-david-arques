import pokedexInfo from "../info/pokedexInfo.js";

const pokemonListURL = async () => {
  const resources: Response = await fetch(
    `${pokedexInfo.pokemonList.url}?offset=${pokedexInfo.pokemonList.urlOffset}&limit=${pokedexInfo.pokemonList.urlOffsetLimit}`
  );
  const list = await resources.json();
  return list;
};
export default pokemonListURL;
