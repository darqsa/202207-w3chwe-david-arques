import { PokemonInfo } from "../../components/interfaces.js";
import currentPokemon from "../apiUrls/currentPokemonUrl.js";

const pokemonStats = async (current: number) => {
  const pokemonInfo = await currentPokemon(current);
  const pokemon: PokemonInfo = await {
    name: "pokemon test name",
    id: pokemonInfo.id,
    sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonInfo.id}.png`,
    type: pokemonInfo.types,
    height: pokemonInfo.height,
    weight: pokemonInfo.weight,
    abilities: pokemonInfo.abilities,
  };
  return pokemon;
};
export default pokemonStats;
