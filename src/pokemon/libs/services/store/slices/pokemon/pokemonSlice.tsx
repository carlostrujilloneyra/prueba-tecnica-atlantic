import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../../../../interfaces/pokemon";
import { Result } from "../../../../interfaces/api-response";

interface PokemonState {
  page: number;
  isLoading: boolean;
  pokemons: Result[];
}

interface PokemonPayload {
  isLoading?: boolean;
  pokemons: Result[];
  page: number;
}

interface PokemonsState {
  caughtPokemons: { [key: string]: Result };
}

const initialState: PokemonState = {
  page: 0,
  isLoading: false,
  pokemons: [],
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

    toggleFavorite(state, action: PayloadAction<Result>) {
      const pokemon = action.payload;
      const { id } = pokemon;
    },
  },
});

export const { startLoadingPokemons, setPokemons, toggleFavorite } =
  pokemonSlice.actions;
