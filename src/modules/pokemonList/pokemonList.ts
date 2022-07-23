import { PokemonList } from "../../components/interfaces.js";
import pokemonListURL from "../apiUrls/pokemonListUrl.js";

const pokemonList = async () => {
  const list: PokemonList = await pokemonListURL();
  const pokeList = [];
  for (let i = 0; i < list.results.length; i += 1) {
    pokeList.push(list.results[i].url);
  }
  return pokeList;
};

export default pokemonList;
