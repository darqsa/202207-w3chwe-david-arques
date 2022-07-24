import pokedexInfo from "../../modules/info/pokedexInfo.js";
import renderPokemonCard from "../pokemonCards/pokemonCards.js";
import unRenderPokemonCard from "../pokemonCards/removePokemonCards.js";
import renderPokemonSelector from "../pokemonSelector/pokemonSelector.js";

const pageSelector = () => {
  const previousButton: HTMLElement = document.getElementById("previousButton");
  const nextButton: HTMLElement = document.getElementById("nextButton");
  let page = 0;

  const currentPage = () => {
    const totalPages =
      pokedexInfo.pokemonList.numberOfPokemon /
      pokedexInfo.pokemonList.urlOffsetLimit;
    page += 1;

    const currentPageString = `${page}/${totalPages.toFixed()}`;

    return currentPageString;
  };
  document.querySelector(".page-selector__actual-page").textContent =
    currentPage();

  const nextPage = () => {
    if (
      pokedexInfo.pokemonList.urlOffset <
      pokedexInfo.pokemonList.numberOfPokemon -
        pokedexInfo.pokemonList.urlOffsetLimit
    ) {
      nextButton.addEventListener("click", () => {
        pokedexInfo.pokemonList.urlOffset +=
          pokedexInfo.pokemonList.urlOffsetLimit;
        pokedexInfo.pokemonRender.current = 0;

        document.querySelector(".page-selector__actual-page").textContent =
          currentPage();

        unRenderPokemonCard();
        renderPokemonCard();
        renderPokemonSelector();
      });
    }
  };

  const previousPage = () => {
    if (pokedexInfo.pokemonList.urlOffset !== 0) {
      previousButton.addEventListener("click", () => {
        pokedexInfo.pokemonList.urlOffset -=
          pokedexInfo.pokemonList.urlOffsetLimit;
        pokedexInfo.pokemonRender.current = 0;

        unRenderPokemonCard();
        renderPokemonCard();
        renderPokemonSelector();
      });
    }
  };
  previousPage();

  nextPage();
};

export default pageSelector;
