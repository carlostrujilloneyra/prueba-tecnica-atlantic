import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../libs/services/store/hooks";
import { getPokemons } from "../libs/services/store/slices/pokemon/thunks";
import { PokemonGrid } from "../components/PokemonGrid";
import { Header } from "../components/shared/Header";
import { toggleFavorite } from "../libs/services/store/slices/pokemon/pokemonSlice";

export const PokemonsPage = () => {
  const dispatch = useAppDispatch();

  const {
    isLoading,
    pokemons = [],
    page,
  } = useAppSelector((state) => state.pokemons);

  const handleNextPage = () => dispatch(getPokemons(page));

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <Header />

      <h1 className="text-2xl mb-6 font-semibold">Página de Pokemones</h1>

      <PokemonGrid pokemons={pokemons} />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
        onClick={handleNextPage}
      >
        Siguiente página
      </button>
    </>
  );
};
