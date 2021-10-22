import React, { useState } from "react";
import { Container, Menu, Group, Redirect, SignOut } from "./style";
import { useLocation } from "react-router-dom";
import { useSession } from "../../hooks/useSession";
import { SelectLocale } from "../SelectLocale";
import RelationLocaleCurrency from "../../utils/RelationLocaleCurrency";
import { api } from "../../api/api";

export const Header: React.FC = () => {
  const { logged, signOut, refreshUser, user } = useSession();
  const userRegion = user?.region;

  const [selectedLocale, setSelectedLocale] = useState<string>(userRegion);
  const location = useLocation();
  const actualPathname = location.pathname;

  const locationOptions = RelationLocaleCurrency.map(({ location }) => {
    return {
      value: location,
      label: location,
    };
  });

  const updateLocationDB = async (region: string): Promise<void> => {
    await api.put("/updateUser", {
      region,
    });
  };

  const handleSelectLocale = (value: string): void => {
    const { id, email, password } = user;
    const data = {
      user: {
        id,
        email,
        password,
        region: value,
      },
    };
    updateLocationDB(value);
    localStorage.setItem("@xpense:user", JSON.stringify(data.user));
    refreshUser()
    setSelectedLocale(value);
  };

  return (
    <Container>
      <Menu to="/">
        XPENSES
        <span>HELPER</span>
      </Menu>
      <Group>
        {!logged &&
          (actualPathname === "/" || actualPathname === "/signup") && (
            <Redirect to="/signin">Sign In</Redirect>
          )}
        {!logged && actualPathname === "/signin" && (
          <Redirect to="/signup">Sign Up</Redirect>
        )}
        {logged && actualPathname === "/" && (
          <Redirect to="/dashboard">Dashboard</Redirect>
        )}
        {logged && actualPathname === "/dashboard" && (
          <SelectLocale
            options={locationOptions}
            onChange={(e) => handleSelectLocale(e.target.value)}
            value={selectedLocale}
          />
        )}
        {logged && <SignOut onClick={() => signOut()}>Sign Out</SignOut>}
      </Group>
    </Container>
  );
};
