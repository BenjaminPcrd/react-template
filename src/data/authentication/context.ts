import { createContext, useContext } from "react";
import { AuthContextType } from "./model";

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const useAuthContext = () => useContext<AuthContextType>(AuthContext);
