import React, { createContext, useState, useEffect } from "react";
import { api } from "../api/api";

export interface ISessionContext {
  logged: boolean;
  signIn(email: string, password: string): Promise<string | void>;
  signUp(email: string, password: string): Promise<string | void>;
  updateUser(object: IUpdateData): void;
  signOut(): void;
  token: string | null;
  user: User;
}

interface IUpdateData {
  region?: string;
  email?: string;
  password?: string;
}

interface User {
  id?: string;
  email?: string;
  password?: string;
  region?: string;
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
  const [user, setUser] = useState(localStorage.getItem("@xpense:user") ?? {});
  const [token, setToken] = useState(
    localStorage.getItem("@xpense:token") ?? ""
  );
  const [logged, setLogged] = useState<boolean>(false);

  useEffect(() => {
    if (!user || !token) return;

    if (!logged)
      api.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(
        token
      )}`;

    setLogged(true);
  }, [user, token, logged]);

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
      setUser(JSON.stringify(data.user));
      setToken(data.token);
    } catch (err: IErrorProps | any) {
      if (
        err?.response?.data?.error === "email" ||
        err?.response?.data?.error === "password"
      ) {
        return err?.response?.data?.error;
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
      if (err?.response?.data?.error === "email") {
        return err?.response?.data?.error;
      }
    }
  };

  const signOut = (): void => {
    localStorage.removeItem("@xpense:user");
    localStorage.removeItem("@xpense:token");
    setUser({});
    setToken("");
    setLogged(false);
  };

  const updateUser = (object: IUpdateData): void => {
    let updateData: IUpdateData = { ...user };
    object.email && (updateData.email = object.email);
    object.region && (updateData.region = object.region);
    object.password && (updateData.password = object.password);
    setUser(updateData);
  };

  return (
    <SessionContext.Provider
      value={{ logged, signIn, signOut, signUp, token, user, updateUser }}
    >
      {children}
    </SessionContext.Provider>
  );
};
