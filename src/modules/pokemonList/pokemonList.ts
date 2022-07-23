import apiURL from "../apiUrl/apiUrl.js";

const pokemonList = async () => {
  const list = await apiURL();
  const pokeList = [];
  for (let i = 0; i < list.results.length; i += 1) {
    pokeList.push([list.results[i].name, list.results[i].url]);
  }
  return pokeList;
};

export default pokemonList;
