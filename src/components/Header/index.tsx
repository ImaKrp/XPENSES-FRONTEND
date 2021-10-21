import React from "react";
import { Container, Menu, Group, Redirect, SignOut } from "./style";
import { useLocation } from 'react-router-dom'

export const Header: React.FC = () => {
  const location = useLocation()
  const actualPathname = (location.pathname)
  return (
    <Container>
      <Menu to="/">
        XPENSES
        <span>HELPER</span>
      </Menu>
      <Group>
        {(actualPathname === '/' || actualPathname === '/signup' ) && <Redirect to="/signin">Sign In</Redirect>}
        {(actualPathname === '/signin' ) && <Redirect to="/signup">Sign Up</Redirect>}
        <SignOut onClick={() => console.log('LoggedOut')}>Sign Out</SignOut>
      </Group>
    </Container>
  );
};
