import { Route, Routes } from "react-router-dom";
import { LoginPage, PokemonPage, PokemonsPage } from "../pokemon/pages";
import { PublicRoute } from "./PublicRoutes";
import { PrivateRoute } from "./PrivateRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/pokemons" element={<PokemonsPage />} />
        <Route path="/pokemons/:id" element={<PokemonPage />} />
      </Route>

      {/* <Route element={<PrivateRoute />}>
        <>
          <Route path="/" element={<PokemonsPage />} />
          <Route path="/pokemons" element={<PokemonsPage />} />
          <Route path="/pokemons/:id" element={<PokemonPage />} />
        </>
      </Route> */}

      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
};
