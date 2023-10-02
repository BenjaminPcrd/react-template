import {
  ReactNode,
  createContext,
  useCallback,
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
  LoginProps,
} from "./types";

const DefaultAuthContext: AuthContextType = {
  login: () => {},
  logout: () => {},
};
const AuthContext = createContext<AuthContextType>(DefaultAuthContext);
export const useAuthContext = () => useContext<AuthContextType>(AuthContext);

export const AuthContextProvider = ({ children }: { children?: ReactNode }) => {
  const [loading, setLoading] = useState<AuthLoading | undefined>("INITIALIZE");
  const [error, setError] = useState<AuthError>();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setTimeout(() => {
      setLoading(undefined);
    }, 500);
  }, []);

  const login = useCallback(({ email, password, rememberMe }: LoginProps) => {
    setLoading("LOGIN");
    setError(undefined);
    setTimeout(() => {
      if (email && password && rememberMe) {
        setUser({
          id: "123",
          email,
          familyName: "Doe",
          givenName: "John",
          picture: "https://placekitten.com/200/200",
        });
      } else {
        setError("USER_NOT_FOUND");
      }
      setLoading(undefined);
    }, 1000);
  }, []);

  const logout = useCallback(() => {
    setLoading("LOGOUT");
    setTimeout(() => {
      setUser(undefined);
      setError(undefined);
      setLoading(undefined);
    }, 1000);
  }, []);

  const context = useMemo<AuthContextType>(
    () => ({ user, error, loading, login, logout }),
    [user, error, loading, login, logout]
  );

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
