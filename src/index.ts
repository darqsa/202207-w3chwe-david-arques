import renderPokemonCard from "./components/PokemonCard/PokemonCard.js";

import currentPokemon from "./modules/apiUrls/currentPokemonUrl.js";
import pokemonStats from "./modules/pokemon/pokemon.js";

// document.querySelector(".card-container__pokemon-name").textContent =
currentPokemon(4);
pokemonStats(0);
renderPokemonCard();
