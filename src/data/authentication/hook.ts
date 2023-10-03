import { useCallback } from "react";
import { AuthProviderType, LoginProps } from "./model";

export const useFakeInitialize = ({
  setError,
  setLoading,
  setUser,
}: AuthProviderType) =>
  useCallback(() => {
    setTimeout(() => {
      setUser(undefined);
      setError(undefined);
      setLoading(undefined);
    }, 1000);
  }, [setError, setLoading, setUser]);

export const useFakeLogin = ({
  setError,
  setLoading,
  setUser,
}: AuthProviderType) =>
  useCallback(
    ({ email, password }: LoginProps) => {
      setLoading("LOGIN");
      setError(undefined);
      setTimeout(() => {
        if (email === "john.doe@email.com" && password === "password") {
          setUser({
            id: "1",
            email,
            familyName: "Doe",
            givenName: "John",
            phoneNumber: "+33612345678",
            picture: "https://placekitten.com/200/200",
          });
        } else if (email === "admin@email.com" && password === "password") {
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

export const useFakeLogout = ({
  setError,
  setLoading,
  setUser,
}: AuthProviderType) =>
  useCallback(() => {
    setLoading("LOGOUT");
    setTimeout(() => {
      setUser(undefined);
      setError(undefined);
      setLoading(undefined);
    }, 1000);
  }, [setError, setLoading, setUser]);
