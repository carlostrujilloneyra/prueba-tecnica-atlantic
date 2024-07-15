import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/");
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

        <button>Cerrar Sesión</button>
      </header>
    </>
  );
};
