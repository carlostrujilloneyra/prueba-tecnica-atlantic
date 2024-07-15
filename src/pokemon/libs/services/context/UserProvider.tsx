import { useState } from "react";
import { UserContext } from "./UserContext";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const UserProvider = ({ children }: Props) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [name, setName] = useState<string>("Carlos");

  console.log("Estado del logueo...", isLogged);

  return (
    <UserContext.Provider
      value={{
        isLogged,
        setIsLogged,
        name,
        setName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
