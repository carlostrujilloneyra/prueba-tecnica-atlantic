import { createContext } from "react";

interface UserContextProps {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext({} as UserContextProps);
