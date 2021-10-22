import React from "react";
import { Container, DeleteBtn } from "./style";
import { RiDeleteBin6Line } from "react-icons/ri";

interface IHistoryCardProps {
  alias: string;
  amount: string;
  date: string;
  id: string;
  negative: boolean;
  deleteTransaction(
    id: string,
  ): Promise<void>;
}

export const HistoryCard: React.FC<IHistoryCardProps> = ({
  negative,
  alias,
  amount,
  date,
  id
}) => {
  return (
    <Container negative={negative}>
      <div className="column">
        {alias}
        <span>{date}</span>
      </div>
      <div className="row">
        {amount}
        <DeleteBtn>
          <RiDeleteBin6Line />
        </DeleteBtn>
      </div>
    </Container>
  );
};
