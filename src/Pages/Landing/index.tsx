import React, { useEffect } from "react";
import {
  Container,
  Title,
  Subtitle,
  Column,
  Row,
  Image,
  SingIn,
} from "./style";
import { useSession } from "../../hooks/useSession";

export const Landing: React.FC = () => {
  const { logged } = useSession();

  useEffect(() => {
    document.title = "XPENSEShelper";
  }, []);

  return (
    <Container>
      <Row>
        <Column>
          <Title>XPENSES</Title>
          <Title>HELPER</Title>
          <Subtitle>
            A simple app trying to make your life easier as possible helping
            with your finances.
          </Subtitle>
          <SingIn to={logged ? "/dashboard" : "/signin"}>Get Started</SingIn>
        </Column>
        <Image src="/images/Dashboard.png" />
      </Row>
    </Container>
  );
};
