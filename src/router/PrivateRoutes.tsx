import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const isLogged = localStorage.getItem("user");

  return isLogged ? <Outlet /> : <Navigate to="/login" />;
};
