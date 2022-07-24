import pokedexInfo from "../../modules/info/pokedexInfo.js";
import renderPokemonCard from "../pokemonCards/pokemonCards.js";
import unRenderPokemonCard from "../pokemonCards/removePokemonCards.js";
import renderPokemonSelector from "../pokemonSelector/pokemonSelector.js";

const pageSelector = () => {
  const previousButton: HTMLElement = document.getElementById("previousButton");
  const nextButton: HTMLElement = document.getElementById("nextButton");

  const previousPage = () => {
    if (pokedexInfo.pokemonList.urlOffset % 10 === 0) {
      previousButton.addEventListener("click", () => {
        pokedexInfo.pokemonList.urlOffset += 10;
        pokedexInfo.pokemonRender.current = 0;
        unRenderPokemonCard();
        renderPokemonSelector();
        renderPokemonCard();
      });
    }
  };
  previousPage();

  const nextPage = () => {
    if (pokedexInfo.pokemonList.urlOffset % 10 === 0) {
      nextButton.addEventListener("click", () => {
        pokedexInfo.pokemonList.urlOffset += 10;
        pokedexInfo.pokemonRender.current = 0;

        unRenderPokemonCard();
        renderPokemonCard();
        renderPokemonSelector();
      });
    }
  };
  nextPage();
};

export default pageSelector;
