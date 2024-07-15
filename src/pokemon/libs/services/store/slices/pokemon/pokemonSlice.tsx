import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../../../../interfaces/pokemon";
import { Result } from "../../../../interfaces/api-response";

interface PokemonState {
  page: number;
  isLoading: boolean;
  pokemons: Result[];
  favorites: { [key: string]: boolean };
}

interface PokemonPayload {
  isLoading?: boolean;
  pokemons: Result[];
  page: number;
}

const initialState: PokemonState = {
  page: 0,
  isLoading: false,
  pokemons: [],
  favorites: {},
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    startLoadingPokemons(state) {
      state.isLoading = true;
    },

    setPokemons(state, action: PayloadAction<PokemonPayload>) {
      state.isLoading = false;
      state.pokemons = action.payload.pokemons;
      state.page = action.payload.page;
    },

    toggleFavorite(state, action: PayloadAction<string>) {
      const pokemonId = action.payload;
      state.favorites[pokemonId] = !state.favorites[pokemonId];
    },
  },
});

export const { startLoadingPokemons, setPokemons, toggleFavorite } =
  pokemonSlice.actions;
