import { Result } from "../libs/interfaces/api-response";
import { PokemonCard } from "./PokemonCard";

interface Props {
  pokemons: Result[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};
