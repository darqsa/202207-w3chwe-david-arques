import pokedexInfo from "../../modules/info/pokedexInfo.js";
import pokemonStats from "../../modules/pokemon/pokemon.js";

const renderPokemonCard = async () => {
  const pokemon = await pokemonStats(pokedexInfo.pokemonRender.current);

  const pokemonCardHeader = () => {
    const pokemonName = document.createElement("h1");
    document.querySelector(".card-container__header").appendChild(pokemonName);
    pokemonName.textContent = `#${pokemon.id} - ${pokemon.name}`;
    pokemonName.className = "card-container__pokemon-name";
  };

  const pokemonCardImages = () => {
    const pokemonSprite = document.createElement("img");
    document
      .querySelector(".card-container__images-container")
      .appendChild(pokemonSprite);
    pokemonSprite.className = "card-container__image";
    pokemonSprite.src = `${pokemon.sprite}`;
    pokemonSprite.alt = `pokemon ${pokemon.name} image`;
  };

  const pokemonCardStats = () => {
    const typeStat = document.createElement("span");
    document.querySelector("#stat1").appendChild(typeStat);
    typeStat.textContent = `Types: ${pokemon.type}`;

    const heightStat = document.createElement("span");
    document.querySelector("#stat2").appendChild(heightStat);
    heightStat.textContent = `Height: ${pokemon.height}`;

    const weightStat = document.createElement("span");
    document.querySelector("#stat3").appendChild(weightStat);
    weightStat.textContent = `Weight: ${pokemon.weight}`;

    const abilitiesStat = document.createElement("span");
    document.querySelector("#stat4").appendChild(abilitiesStat);
    abilitiesStat.textContent = `Abilities: ${pokemon.abilities}`;
  };
  pokemonCardHeader();
  pokemonCardImages();
  pokemonCardStats();
};
export default renderPokemonCard;
