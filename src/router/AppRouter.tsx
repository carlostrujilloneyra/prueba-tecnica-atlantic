import { Route, Routes } from "react-router-dom";
import { PokemonsPage } from "../pokemon/pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PokemonsPage />} />
      <Route path="/pokemons" element={<PokemonsPage />} />
    </Routes>
  );
};
