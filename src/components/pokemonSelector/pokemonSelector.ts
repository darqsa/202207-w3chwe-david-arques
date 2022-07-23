import pokemonStats from "../../modules/pokemon/pokemon.js";
import pokemonList from "../../modules/pokemonList/pokemonList.js";

const renderPokemonSelector = async () => {
  const list: string[] = await pokemonList();
  let i = 0;

  for (i = 0; i < list.length; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    const currentPokemon = await pokemonStats(i);
    const pokemonIcon = document.createElement("img");
    document.querySelector(`#pokemon${i}`).appendChild(pokemonIcon);
    pokemonIcon.className = "selector-container__list-image";
    pokemonIcon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentPokemon.id}.png`;
    pokemonIcon.alt = `pokemon ${currentPokemon.name} image`;
  }
};
export default renderPokemonSelector;
