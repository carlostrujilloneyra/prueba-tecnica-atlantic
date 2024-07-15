import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = () => {
  const isLogged = localStorage.getItem("user");

  return !isLogged ? <Outlet /> : <Navigate to="/pokemons" />;
};
