import { PokemonInfo, PokemonList } from "../../components/interfaces.js";
import PokemonListURL from "../apiUrls/pokemonListUrl.js";
import currentPokemon from "../apiUrls/currentPokemonUrl.js";

const pokemonStats = async (current: number) => {
  const pokemonInfo = await currentPokemon(current);

  const pokemonName = async () => {
    const nameList: PokemonList = await PokemonListURL();
    const currentPokemonName = nameList.results[current].name;
    return currentPokemonName;
  };
  const currentPokemonName = await pokemonName();

  let types;
  if (pokemonInfo.types.length === 2) {
    types = `${pokemonInfo.types[0].type.name}, ${pokemonInfo.types[1].type.name}`;
  } else {
    types = `${pokemonInfo.types[0].type.name}`;
  }

  const pokemon: PokemonInfo = await {
    name: currentPokemonName[0].toUpperCase() + currentPokemonName.slice(1),
    id: pokemonInfo.id,
    sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonInfo.id}.png`,
    type: types,
    height: pokemonInfo.height,
    weight: pokemonInfo.weight,
    abilities: pokemonInfo.abilities,
  };
  return pokemon;
};
export default pokemonStats;
