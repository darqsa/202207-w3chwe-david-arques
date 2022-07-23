import pokedexInfo from "../info/pokedexInfo.js";

const apiURL = async () => {
  const resources = await fetch(
    `${pokedexInfo.pokemonList.url}?offset=${pokedexInfo.pokemonList.urlOffset}&limit=${pokedexInfo.pokemonList.urlOffsetLimit}`
  );
  const list = await resources.json();
  return list;
};
export default apiURL;
