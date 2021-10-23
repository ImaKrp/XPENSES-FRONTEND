import React, { createContext, useState, useMemo, useEffect } from "react";
import { api } from "../api/api";

export interface ISessionContext {
  logged: boolean;
  signIn(email: string, password: string): Promise<string | void>;
  signUp(email: string, password: string): Promise<string | void>;
  signOut(): void;
  refreshUser(): void;
  token: string | null;
  user: User;
}

interface User {
  id: string;
  email: string;
  password: string;
  region: string;
}

export interface IDataProps {
  error: string;
  token: string;
  user: User;
}

export interface IErrorProps {
  response: {
    data: {
      error: string;
    };
  };
}

export const SessionContext = createContext<ISessionContext>(
  {} as ISessionContext
);

export const SessionProvider: React.FC = ({ children }) => {
  const token = localStorage.getItem("@xpense:token") ?? "";
  const [changed, setChanged] = useState<boolean>(false);

  const user = useMemo(() => {
    if (changed || !changed) {
      const storedUser = localStorage.getItem("@xpense:user");
      if (storedUser) return JSON.parse(storedUser);
    }
  }, [changed]);

  useEffect(() => {
    if (!user || !token) return;
    api.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(
      token
    )}`;
    setLogged(true);
  }, [user, token]);

  const [logged, setLogged] = useState<boolean>(false);

  const signIn = async (
    email: string,
    password: string
  ): Promise<string | void> => {
    try {
      const { data } = await api.post<IDataProps>("/authenticate", {
        email: email,
        password: password,
      });
      localStorage.setItem("@xpense:user", JSON.stringify(data.user));
      localStorage.setItem("@xpense:token", JSON.stringify(data.token));

      api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      setLogged(true);
    } catch (err: IErrorProps | any) {
      if (
        err.response.data.error === "email" ||
        err.response.data.error === "password"
      ) {
        return err.response.data.error;
      }
    }
  };

  const signUp = async (
    email: string,
    password: string
  ): Promise<string | void> => {
    try {
      await api.post<IDataProps>("/register", {
        email: email,
        password: password,
      });
      await signIn(email, password);
    } catch (err: IErrorProps | any) {
      if (err.response.data.error === "email") {
        return err.response.data.error;
      }
    }
  };

  const signOut = (): void => {
    localStorage.removeItem("@xpense:user");
    localStorage.removeItem("@xpense:token");
    setLogged(false);
  };

  const refreshUser = (): void => {
    setChanged(!changed);
  };

  return (
    <SessionContext.Provider
      value={{ logged, signIn, signOut, signUp, refreshUser, token, user }}
    >
      {children}
    </SessionContext.Provider>
  );
};
