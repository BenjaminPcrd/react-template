import { useCallback, useEffect, useMemo, useState } from "react";
import { AuthContext } from "./context";
import {
  AuthContextType,
  AuthError,
  AuthLoading,
  LoginProps,
  User,
} from "./model";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>();
  const [error, setError] = useState<AuthError>();
  const [loading, setLoading] = useState<AuthLoading | undefined>("INITIALIZE");

  useEffect(() => {
    setTimeout(() => {
      setUser(undefined);
      setError(undefined);
      setLoading(undefined);
    }, 1000);
  }, []);

  const login = useCallback(
    ({ email, password }: LoginProps) => {
      setLoading("LOGIN");
      setError(undefined);
      setTimeout(() => {
        if (email === "john.doe@email.com" && password === "aze") {
          setUser({
            id: "1",
            email,
            familyName: "Doe",
            givenName: "John",
            phoneNumber: "+33612345678",
            picture: "https://placekitten.com/200/200",
          });
        } else if (email === "admin@email.com" && password === "aze") {
          setUser({ id: "2", email });
        } else if (
          email !== "john.doe@email.com" &&
          email !== "admin@email.com"
        ) {
          setError("USER_NOT_FOUND");
        } else if (password !== "password") {
          setError("NOT_AUTHORIZED");
        }
        setLoading(undefined);
      }, 1000);
    },
    [setError, setLoading, setUser]
  );

  const logout = useCallback(() => {
    setLoading("LOGOUT");
    setTimeout(() => {
      setUser(undefined);
      setError(undefined);
      setLoading(undefined);
    }, 1000);
  }, [setError, setLoading, setUser]);

  const context = useMemo<AuthContextType>(
    () => ({ user, error, loading, login, logout }),
    [user, error, loading, login, logout]
  );

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
