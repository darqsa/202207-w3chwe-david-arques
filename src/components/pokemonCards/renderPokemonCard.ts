import pokedexInfo from "../../modules/info/pokedexInfo.js";
import pokemonStats from "../../modules/pokemonStats/pokemonStats.js";

const renderPokemonCard = async () => {
  const pokemon = await pokemonStats(pokedexInfo.pokemonRender.current);

  const pokemonCardHeader = () => {
    const pokemonName = document.createElement("h1");
    document.querySelector(".card-container__header").appendChild(pokemonName);
    pokemonName.textContent = `N.${pokemon.id} - ${pokemon.name}`;
    pokemonName.className = "card-container__pokemon-name";
    pokemonName.setAttribute("id", "pokemonName");
  };

  const pokemonCardImages = () => {
    const pokemonSprite = document.createElement("img");
    document
      .querySelector(".card-container__images-container")
      .appendChild(pokemonSprite);
    pokemonSprite.className = "card-container__image";
    pokemonSprite.src = `${pokemon.sprite}`;
    pokemonSprite.alt = `pokemon ${pokemon.name} image`;
    pokemonSprite.setAttribute("id", "pokemonImage");
  };

  const pokemonCardStats = () => {
    const typeStat = document.createElement("span");
    document.querySelector("#stat1").appendChild(typeStat);
    typeStat.textContent = `Types: ${pokemon.type}`;
    typeStat.className = "card-container__stat-1";
    typeStat.setAttribute("id", "pokemonStat1");

    const heightStat = document.createElement("span");
    document.querySelector("#stat2").appendChild(heightStat);
    heightStat.textContent = `Height: ${pokemon.height}`;
    heightStat.className = "card-container__stat-2";
    heightStat.setAttribute("id", "pokemonStat2");

    const weightStat = document.createElement("span");
    document.querySelector("#stat3").appendChild(weightStat);
    weightStat.textContent = `Weight: ${pokemon.weight}`;
    weightStat.className = "card-container__stat-3";
    weightStat.setAttribute("id", "pokemonStat3");

    const abilitiesStat = document.createElement("span");
    document.querySelector("#stat4").appendChild(abilitiesStat);
    abilitiesStat.textContent = `Abilities: ${pokemon.abilities}`;
    abilitiesStat.className = "card-container__stat-4";
    abilitiesStat.setAttribute("id", "pokemonStat4");
  };
  pokemonCardHeader();
  pokemonCardImages();
  pokemonCardStats();
};
export default renderPokemonCard;
