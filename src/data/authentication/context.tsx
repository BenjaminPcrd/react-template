import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  User,
  AuthContextType,
  AuthLoading,
  AuthError,
  AuthProviderType,
} from "./model";
import { useFakeInitialize, useFakeLogin, useFakeLogout } from "./hook";

const DefaultAuthContext: AuthContextType = {
  loading: "INITIALIZE",
  login: () => {},
  logout: () => {},
};
const AuthContext = createContext<AuthContextType>(DefaultAuthContext);
export const useAuthContext = () => useContext<AuthContextType>(AuthContext);

export const AuthContextProvider = ({ children }: { children?: ReactNode }) => {
  const [loading, setLoading] = useState<AuthLoading | undefined>("INITIALIZE");
  const [error, setError] = useState<AuthError>();
  const [user, setUser] = useState<User>();

  const provider: AuthProviderType = {
    setError,
    setLoading,
    setUser,
  };

  const initialize = useFakeInitialize(provider);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => initialize(), []);

  const login = useFakeLogin(provider);
  const logout = useFakeLogout(provider);

  const context = useMemo<AuthContextType>(
    () => ({ user, error, loading, login, logout }),
    [user, error, loading, login, logout]
  );

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
