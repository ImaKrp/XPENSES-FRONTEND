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
import Mask from "../../utils/masks";
interface ITransactionProps {
  createTransaction(
    alias: string,
    amount: string,
    negative: boolean
  ): Promise<void>;
}

export const TransactionCard: React.FC<ITransactionProps> = ({
  createTransaction,
}) => {
  const [alias, setAlias] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [negative, setNegative] = useState<boolean>(false);

  const handleSubmit = async (e: any): Promise<void> => {
    e.preventDefault();
    await createTransaction(alias, amount, negative);
    setAlias("");
    setAmount("");
  };

  return (
    <Container onSubmit={(e) => handleSubmit(e)}>
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
            onChange={(e) => setAmount(Mask.MoneyMask(e.target.value))}
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
