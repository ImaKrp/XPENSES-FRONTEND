import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Container, Column, History, HistoryTitle } from "./style";
import { TransactionCard } from "../../components/TransactionCard";
import { RelationCard } from "../../components/RelationCard";
import { HistoryCard } from "../../components/HistoryCard";
import { api } from "../../api/api";
import { useSession } from "../../hooks/useSession";
import {
  getCurrency,
  formatAmountValue,
  formatDate,
} from "../../utils/convertToLocale";

interface IDataProps {
  id: string;
  alias: string;
  value: number;
  created_at: string;
  user_id: string;
  deleted: boolean;
}

export const Dashboard: React.FC = () => {
  const { user } = useSession();
  const userCurrency = getCurrency(user.region);
  const [transactions, setTransactions] = useState<IDataProps[]>([]);

  const deleteTransaction = async (id: string) => {
    await api.delete(`/transaction/delete?id=${id}`);
    fetchTransactions();
  };

  const fetchTransactions = useCallback(async () => {
    const { data } = await api.get<IDataProps[]>("/transaction/list");
    setTransactions(data);
  }, []);

  const gains = useMemo(() => {
    let total: number = 0;
    transactions
      .filter((item) => {
        return item.value > 0;
      })
      .forEach((item) => {
        total += item.value;
      });
    return total;
  }, [transactions]);

  const expenses = useMemo(() => {
    let total: number = 0;
    transactions
      .filter((item) => {
        return item.value < 0;
      })
      .forEach((item) => {
        total += item.value * -1;
      });
    return total;
  }, [transactions]);

  const balance = useMemo(() => {
    return gains - expenses;
  }, [expenses, gains]);

  useEffect(() => {
    document.title = "XPENSES Dashboard";
    fetchTransactions();
  }, [fetchTransactions]);

  const createTransaction = async (
    alias: string,
    amount: string,
    negative: boolean
  ): Promise<void> => {
    await api.post("/transaction", {
      alias: alias,
      transaction: negative ? Number(amount) * -1 : Number(amount),
    });
    await fetchTransactions();
  };

  return (
    <Container>
      <Column>
        <RelationCard
          incomeValue={formatAmountValue(gains, user.region)}
          expenseValue={formatAmountValue(expenses, user.region)}
          totalBalance={formatAmountValue(balance, user.region)}
          currency={userCurrency}
        />
        <TransactionCard createTransaction={createTransaction} />
      </Column>
      <History>
        <HistoryTitle>History</HistoryTitle>
        {transactions &&
          transactions.length > 0 &&
          transactions.map((transaction, index) => {
            return (
              <HistoryCard
                key={index}
                alias={transaction.alias}
                amount={formatAmountValue(transaction.value, user.region)}
                date={formatDate(new Date(transaction.created_at), user.region)}
                id={transaction.id}
                negative={transaction.value < 0 ? true : false}
                deleteTransaction={deleteTransaction}
              />
            );
          })}
      </History>
    </Container>
  );
};
