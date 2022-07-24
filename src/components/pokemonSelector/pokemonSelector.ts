import pokemonStats from "../../modules/pokemon/pokemon.js";
import pokemonList from "../../modules/finalPokemonList/finalPokemonList.js";
import pokedexInfo from "../../modules/info/pokedexInfo.js";
import renderPokemonCard from "../pokemonCards/pokemonCards.js";

const renderPokemonSelector = async () => {
  const list: string[] = await pokemonList();
  let i = 0;

  for (i = 0; i < list.length; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    const currentPokemon = await pokemonStats(i);

    const pokemonIcon: HTMLInputElement = document.querySelector(
      `#pokemon${i}`
    );
    pokemonIcon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentPokemon.id}.png`;
    pokemonIcon.alt = `pokemon ${currentPokemon.name} image`;

    document
      .querySelector(`#pokemon${i}`)
      .addEventListener("click", async () => {
        pokedexInfo.pokemonRender.current = (currentPokemon.id - 1) % 10;
        await renderPokemonCard();
      });
  }
};

export default renderPokemonSelector;
