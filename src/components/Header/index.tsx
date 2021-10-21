import React from "react";
import { Container, Menu, Group, Redirect } from "./style";

export const Header: React.FC = () => {
  return (
    <Container>
      <Menu to="/">
        XPENSES
        <span>HELPER</span>
      </Menu>
      <Group>
        <Redirect to="/">Login</Redirect>
      </Group>
    </Container>
  );
};
