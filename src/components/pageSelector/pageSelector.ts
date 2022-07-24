import pokedexInfo from "../../modules/info/pokedexInfo.js";
import renderPokemonCard from "../pokemonCards/renderPokemonCard.js";
import unRenderPokemonCard from "../pokemonCards/unRenderPokemonCard.js";
import renderPokemonSelector from "../pokemonSelector/renderPokemonSelector.js";

const pageSelector = () => {
  const previousButton: HTMLElement = document.getElementById("previousButton");
  const nextButton: HTMLElement = document.getElementById("nextButton");
  let page = 0;

  const currentPage = () => {
    page += 1;

    const currentPageString = `${page}/${(
      pokedexInfo.pokemonList.numberOfPokemon /
      pokedexInfo.pokemonList.urlOffsetLimit
    ).toFixed()}`;

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
