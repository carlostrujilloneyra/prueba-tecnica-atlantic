import { Route, Routes } from "react-router-dom";
import { LoginPage, PokemonPage, PokemonsPage } from "../pokemon/pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<PokemonsPage />} />
      <Route path="/pokemons" element={<PokemonsPage />} />
      <Route path="/pokemons/:id" element={<PokemonPage />} />

      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
};
