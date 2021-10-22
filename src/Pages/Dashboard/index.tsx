import React, { useEffect } from "react";
import { Container, Column } from "./style";
import { TransactionCard } from "../../components/TransactionCard";
import { RelationCard } from "../../components/RelationCard";

export const Dashboard: React.FC = () => {
  useEffect(() => {
    document.title = "XPENSES Dashboard";
  }, []);

  return (
    <Container>
      <Column>
        <RelationCard />
        <TransactionCard />
      </Column>
    </Container>
  );
};
