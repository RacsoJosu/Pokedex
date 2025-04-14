import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemonDetail, getPokemons } from "../api";
import { setLoading } from "./uiSlice";
import { getPokemnsIndex } from "../utils/pokemons.utils";

const initialState = {
  pokemons: [],
};

export const fetchPokemonsWithDetails = createAsyncThunk(
  "data/fetchPokemonsWithDetails",
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    const data = await getPokemons();
    const pokemonDetails = await Promise.all(
      data.map((pokemon) => getPokemonDetail(pokemon))
    );
    dispatch(setPokemons(pokemonDetails));
    dispatch(setLoading(false));
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const pokemonIndex = getPokemnsIndex(state.pokemons, action);
      if (pokemonIndex >= 0) {
        const favorite = state.pokemons[pokemonIndex].favorite;
        state.pokemons[pokemonIndex].favorite = !favorite;
      }
    },
  },
});

export const { setFavorite, setPokemons } = dataSlice.actions;
export default dataSlice.reducer;
