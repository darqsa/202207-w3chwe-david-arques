import { PokemonList } from "../../components/interfaces.js";
import pokemonListURL from "../pokemonListUrl/pokemonListUrl.js";

const pokemonList = async () => {
  const list: PokemonList = await pokemonListURL();
  const pokeListUrl: string[] = [];
  for (let i = 0; i < list.results.length; i += 1) {
    pokeListUrl.push(list.results[i].url);
  }
  return pokeListUrl;
};

export default pokemonList;
