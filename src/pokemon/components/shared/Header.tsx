import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../libs/services/context/UserContext";

export const Header = () => {
  const navigate = useNavigate();

  const { setIsLogged, name } = useContext(UserContext);

  const isLogged = localStorage.getItem("user");

  const handleNavigateHome = () => {
    navigate("/");
  };

  const handleLogout = () => {
    setIsLogged(false);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      <header className="container-max-width padding-x fixed left-0 right-0 top-0 z-40 flex h-[90px] w-full content-center items-center justify-between bg-gradient py-8 sm:py-9 bg-black">
        <h2
          className="min-h-[40px] text-4xl font-extrabold tracking-[3px] text-white hover:cursor-pointer"
          onClick={handleNavigateHome}
        >
          API Pokedex
        </h2>

        {isLogged && (
          <p className="text-white font-medium">Bienvenido(a): {name}</p>
        )}

        <button
          className="text-white bg-blue-700 font-semibold px-3 py-2 rounded-xl"
          onClick={handleLogout}
        >
          Cerrar Sesión
        </button>
      </header>
    </>
  );
};
