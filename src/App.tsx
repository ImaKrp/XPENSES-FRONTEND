import React from "react";
import GlobalStyleProvider from "./global/globalStyles";
import { Routes } from "./routes";

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyleProvider />
      <Routes />
    </>
  );
};
