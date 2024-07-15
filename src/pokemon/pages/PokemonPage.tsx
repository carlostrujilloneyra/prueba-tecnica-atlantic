import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Pokemon } from "../libs/interfaces/pokemon";
import axios from "axios";
import { Header } from "../components/shared/Header";
import { toggleFavorite } from "../libs/services/store/slices/pokemon/pokemonSlice";
import { useAppSelector } from "../libs/services/store/hooks";

const getPokemon = async (id: string): Promise<Pokemon> => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("No se pudo cargar el pokemon");
  }
};

export const PokemonPage = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const favorites = useAppSelector((state) => state.pokemons.favorites);

  const handleNavigatePrevious = () => {
    navigate(-1);
  };

  const handleCapturePokemon = () => {
    if (id) {
      dispatch(toggleFavorite(id));
    }
  };

  useEffect(() => {
    const fetchPokemon = async () => {
      if (id) {
        const fetchedPokemon = await getPokemon(id);
        setPokemon(fetchedPokemon);
      }
    };

    fetchPokemon();
  }, [id]);

  if (!pokemon) return <h1>Cargando...</h1>;

  return (
    <>
      <Header />
      <button
        className="bg-slate-600 px-4 py-2 ml-4 mb-5 text-white rounded-md cursor-pointer"
        onClick={handleNavigatePrevious}
      >
        Regresar
      </button>

      <div className="grid grid-cols-[1fr,0.5fr] text-slate-800">
        <div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-slate-200 bg-clip-border  shadow-lg  p-3">
          <div className="mt-2 mb-8 w-full">
            <h1 className="px-2 text-xl font-bold text-slate-700 capitalize mb-4">
              Detalle Pokemon: {pokemon.name} ({pokemon.id})
            </h1>
            <div className="flex flex-col justify-center items-center">
              <img
                src={pokemon.sprites.other?.dream_world.front_default ?? ""}
                width={150}
                height={150}
                alt={`Imagen del pokemon ${pokemon.name}`}
                className="mb-5"
              />

              <div className="flex flex-wrap">
                {pokemon.moves.map((move) => (
                  <p key={move.move.name} className="mr-2 capitalize">
                    {move.move.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 px-2 w-full">
          <div className="flex flex-col items-start justify-center rounded-2xl bg-clip-border px-3 py-4 bg-slate-50 drop-shadow-lg ">
            <p className="text-sm text-blue-700 font-bold">Tipo:</p>
            <div className="text-base font-medium text-navy-700 flex">
              {pokemon.types.map((type) => (
                <p key={type.slot} className="mr-2 capitalize">
                  {type.type.name}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-slate-50 bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-blue-700 font-bold">Peso</p>
            <span className="text-base font-medium text-navy-700 flex">
              {pokemon.weight}
            </span>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-slate-50 bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-blue-700 font-bold">Regular Sprites</p>
            <div className="flex justify-center">
              <img
                src={pokemon.sprites.front_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <img
                src={pokemon.sprites.back_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-slate-50 bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-blue-700 font-bold">Shiny Sprites</p>
            <div className="flex justify-center">
              <img
                src={pokemon.sprites.front_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <img
                src={pokemon.sprites.back_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>
        </div>

        {!favorites[id] && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 w-[240px]"
            onClick={handleCapturePokemon}
          >
            Capturar Pokemon
          </button>
        )}

        {favorites[id] && (
          <span className="mt-4 ml-4 bg-slate-600 w-[180px] text-center px-4 py-2 text-white rounded-lg">
            Pokemon capturado
          </span>
        )}
      </div>
    </>
  );
};
