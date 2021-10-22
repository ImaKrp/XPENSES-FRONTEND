import React from "react";
import { Container, Income, Expense, Amount, Total } from "./style";

interface IRealtionProps {
  incomeValue: string;
  expenseValue: string;
  totalBalance: string;
  currency: string;
}

export const RelationCard: React.FC<IRealtionProps> = ({
  incomeValue,
  expenseValue,
  totalBalance,
  currency,
}) => {
  return (
    <Container>
      <div>
        <Income>
          INCOME
          <Amount>{incomeValue}</Amount>
        </Income>
        <Expense>
          EXPENSE
          <Amount>{expenseValue}</Amount>
        </Expense>
      </div>
      <div>
        <Total>{totalBalance}</Total>
        <span>{currency}</span>
      </div>
      <span>Total Balance</span>
    </Container>
  );
};
