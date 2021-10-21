import React from "react";
import {
  Container,
  Title,
  Subtitle,
  Column,
  Row,
  Image,
  Login,
} from "./style";

export const Landing: React.FC = () => {
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
          <Login to="/">Get Started</Login>
        </Column>
        <Image src="/images/Dashboard.png" />
      </Row>
    </Container>
  );
};
