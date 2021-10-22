import React, { useState } from "react";
import {
  Container,
  Title,
  Label,
  InputDiv,
  Input,
  SubmitBtn,
  AmountDiv,
  AmountBtn,
  AmountInput,
} from "./style";
import { api } from "../../api/api";

export const TransactionCard: React.FC = () => {
  const [alias, setAlias] = useState<string>();
  const [amount, setAmount] = useState<string>();
  const [negative, setNegative] = useState<boolean>(false);

  const createTransaction = async (e: any): Promise<void> => {
    e.preventDefault();
    await api.post("/transaction", {
      alias: alias,
      transaction: negative ? Number(amount) * -1 : Number(amount),
    });
    setAlias("");
    setAmount("");
  };

  return (
    <Container onSubmit={(e) => createTransaction(e)}>
      <Title>New Transaction</Title>
      <InputDiv>
        <Label>Name</Label>
        <Input
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
          placeholder="Input the transaction value."
          type="text"
          required
        />
      </InputDiv>
      <InputDiv>
        <Label>Amount</Label>
        <AmountDiv>
          <AmountBtn
            type="button"
            negative={negative}
            onClick={() => setNegative(!negative)}
          >
            {negative ? "-" : "+"}
          </AmountBtn>
          <AmountInput
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Input the transaction value."
            type="number"
            step="any"
            required
          />
        </AmountDiv>
      </InputDiv>
      <SubmitBtn type="submit">Add</SubmitBtn>
    </Container>
  );
};
