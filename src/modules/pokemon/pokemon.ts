import { PokemonInfo } from "../../components/interfaces.js";
import currentPokemon from "../apiUrls/currentPokemonUrl.js";

const pokemonStats = async (pokemonName: string, current: number) => {
  const pokemonInfo = await currentPokemon(current);
  const pokemon: PokemonInfo = await {
    name: pokemonName,
    id: pokemonInfo.id,
    sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonInfo.id}.png`,
    type: pokemonInfo.types,
    height: pokemonInfo.height,
    weight: pokemonInfo.weight,
  };
  return pokemon;
};
export default pokemonStats;
