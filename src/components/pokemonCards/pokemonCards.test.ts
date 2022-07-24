import renderPokemonCard from "./pokemonCards";

describe("Given a renderPokemonCard function ", () => {
  describe("When pokemonCardHeader is called ", () => {
    test("Then it should return a h1 element with a text content", () => {
      const container = document.createElement("header");

      renderPokemonCard();

      expect(container.querySelector("h1").textContent).not.toBeNull();
    });
  });
});
