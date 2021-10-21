import React from "react";
import { Container } from "./style";
import { Header } from "../components/Header";

export const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};
