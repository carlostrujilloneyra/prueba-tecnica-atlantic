import { Link } from "react-router-dom";
import { Result } from "../libs/interfaces/api-response";
import { useAppDispatch, useAppSelector } from "../libs/services/store/hooks";
import { toggleFavorite } from "../libs/services/store/slices/pokemon/pokemonSlice";

interface Props {
  pokemon: Result;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;

  const dispatch = useAppDispatch();

  const favorites = useAppSelector((state) => state.pokemons.favorites);

  const handleCapturePokemon = () => {
    if (id) {
      dispatch(toggleFavorite(id));
    }
  };

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          <img
            key={pokemon.id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width={100}
            height={100}
            alt={pokemon.name}
          />

          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {name}
          </p>

          <button
            className="text-white cursor-pointer font-semibold underline"
            onClick={handleCapturePokemon}
          >
            Atrapar pokemon
          </button>

          {favorites[id] && (
            <span className="text-lime-500 mt-2 text-sm">Pokemon atrapado</span>
          )}

          <div className="mt-5">
            <Link
              to={`/pokemons/${id}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100 cursor-pointer bg-gray-800 hover:bg-gray-700"
            >
              Más información
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
