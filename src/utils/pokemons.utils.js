export const getPokemnsIndex = (pokemons, action) =>
  pokemons.findIndex((pokemon) => pokemon.id === action.payload.pokemonId);
