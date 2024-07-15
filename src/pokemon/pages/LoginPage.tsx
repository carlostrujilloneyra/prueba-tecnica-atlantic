import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../libs/services/context/UserContext";

export const LoginPage = () => {
  const { isLogged, setIsLogged } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogged = () => {
    const newIsLoggedValue = !isLogged;

    setIsLogged(newIsLoggedValue);

    localStorage.setItem("user", newIsLoggedValue.toString());
    navigate("/pokemons");
  };

  return (
    <>
      <h1 className="text-5xl mb-6">LoginPage</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
        onClick={handleLogged}
      >
        Iniciar Sesión
      </button>
    </>
  );
};
