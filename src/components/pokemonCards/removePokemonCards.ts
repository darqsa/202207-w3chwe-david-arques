const unRenderPokemonCard = async () => {
  const pokemonName = document.getElementById("pokemonName");
  const pokemonImage = document.getElementById("pokemonImage");
  const pokemonStat1 = document.getElementById("pokemonStat1");
  const pokemonStat2 = document.getElementById("pokemonStat2");
  const pokemonStat3 = document.getElementById("pokemonStat3");
  const pokemonStat4 = document.getElementById("pokemonStat4");

  pokemonName.parentElement.removeChild(pokemonName);
  pokemonImage.parentElement.removeChild(pokemonImage);
  pokemonStat1.parentElement.removeChild(pokemonStat1);
  pokemonStat2.parentElement.removeChild(pokemonStat2);
  pokemonStat3.parentElement.removeChild(pokemonStat3);
  pokemonStat4.parentElement.removeChild(pokemonStat4);
};
export default unRenderPokemonCard;
