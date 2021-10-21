import React from "react";
// import { AppRoutes } from "./app.routes";
import { PublicRoutes } from "./public.routes";
import { BrowserRouter } from "react-router-dom";

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  );
};
