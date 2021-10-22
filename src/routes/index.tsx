import React from "react";
import { AppRoutes } from "./app.routes";
import { PublicRoutes } from "./public.routes";
import { BrowserRouter } from "react-router-dom";
import { useSession } from "../hooks/useSession";

export const Routes: React.FC = () => {
  const { logged } = useSession();
  return (
    <BrowserRouter>{logged ? <AppRoutes /> : <PublicRoutes />}</BrowserRouter>
  );
};
