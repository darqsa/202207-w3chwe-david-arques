import pokedexInfo from "./pokedexInfo.js";
import PokemonList from "../components/interfaces.js";

const showPokemonList = async () => {
  const resources = await fetch(
    `${pokedexInfo.pokemonList.url}?offset=${pokedexInfo.pokemonList.urlOffset}&limit=${pokedexInfo.pokemonList.urlOffsetLimit}`
  );
  const shownList = await resources.json();
  const tenPokemon: PokemonList = shownList.results;

  return tenPokemon;
};

export default showPokemonList;
