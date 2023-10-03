import { Dispatch, DispatchWithoutAction, SetStateAction } from "react";

export type User = {
  id: string;
  email: string;
  familyName?: string;
  givenName?: string;
  phoneNumber?: string;
  picture?: string;
};

export type AuthLoading = "INITIALIZE" | "LOGIN" | "LOGOUT";

export type AuthError = "USER_NOT_FOUND" | "NOT_AUTHORIZED";

export type LoginProps = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type AuthContextType = {
  user?: User;
  error?: AuthError;
  loading?: AuthLoading;
  login: Dispatch<LoginProps>;
  logout: DispatchWithoutAction;
};

export type AuthProviderType = {
  setError: Dispatch<SetStateAction<AuthError | undefined>>;
  setLoading: Dispatch<SetStateAction<AuthLoading | undefined>>;
  setUser: Dispatch<SetStateAction<User | undefined>>;
};
