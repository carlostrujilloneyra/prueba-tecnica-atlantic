import axios from "axios";
import {
  PokemonsAPIReponse,
  Result,
} from "../../../../interfaces/api-response";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch: any) => {
    dispatch(startLoadingPokemons());

    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page * 10}`
    );
    const data: PokemonsAPIReponse = response.data;

    const pokemonsData = data.results.map((pokemon) => ({
      id: pokemon.url.split("/").at(-2)!,
      name: pokemon.name,
    }));

    dispatch(
      setPokemons({
        pokemons: pokemonsData,
        page: page + 1,
      })
    );
  };
};
