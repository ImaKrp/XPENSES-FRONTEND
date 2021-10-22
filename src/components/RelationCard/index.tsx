import React, { useState } from "react";
import { Container, Income, Expense, Amount, Total } from "./style";

interface IRealtionProps {
  incomeValue: string;
  expenseValue: string;
  totalBalance: string;
  currency: string;
}

export const RelationCard: React.FC = () => {
  return (
    <Container>
      <div>
        <Income>
          INCOME
          <Amount>Value</Amount>
        </Income>
        <Expense>
          EXPENSE
          <Amount>Value</Amount>
        </Expense>
      </div>
      <div>
        <Total>Valor</Total>
        <span>CUR</span>
      </div>
      <span>Total Balance</span>
    </Container>
  );
};
