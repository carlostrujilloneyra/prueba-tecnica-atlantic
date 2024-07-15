import { Link } from "react-router-dom";
import { Result } from "../libs/interfaces/api-response";
import { useAppDispatch, useAppSelector } from "../libs/services/store/hooks";

interface Props {
  pokemon: Result;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;

  console.log(id, name);

  // const isFavorite = useAppSelector((state) => !!state.pokemons.favorites[id]);
  const isFavorite = useAppSelector(
    (state) => !!state.pokemons.caughtPokemons[id]
  );

  const dispatch = useAppDispatch();

  // const onToggle = () => {
  //   dispatch(toggleFavorite(pokemon));
  // };

  const onToggle = () => {
    dispatch(toggleFavorite(pokemon));
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

          <button className="text-white cursor-pointer font-semibold underline">
            Atrapar pokemon
          </button>

          <span className="text-lime-500 mt-2 text-sm">Pokemon atrapado</span>

          <div className="mt-5">
            <Link
              to={`/pokemons/${id}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100 cursor-pointer bg-gray-800 hover:bg-gray-700"
            >
              Más información
            </Link>
          </div>
        </div>

        <div className="border-b">
          <div
            // onClick={onToggle}
            className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer"
          >
            {/* <div className="text-red-600">
              {isFavorite ? <IoHeart /> : <IoHeartOutline />}
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {isFavorite ? "Es favorito" : "No es favorito"}
              </p>
              <p className="text-xs text-gray-500">Click para cambiar</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
