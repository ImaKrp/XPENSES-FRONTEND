import styled, { keyframes } from "styled-components";

const fromLeft = keyframes`
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  50% {
    opacity: .3;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Amount = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
`;

export const Container = styled.div`
  width: 100%;
  border-radius: 1rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  animation: ${fromLeft} 0.5s;
  box-shadow: 0 0.6rem 1.6rem 0 rgba(0, 0, 0, 0.8);

  > span {
    font-size: 1.4rem;
    color: rgb(124, 124, 124);
    width: 100%;
    text-align: center;
  }

  > div {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 0.4rem;
    > span {
      font-size: 1.7rem;
      color: rgb(124, 124, 124);
    }
  }
`;

export const Income = styled.div`
  width: 50%;
  height: 5.6rem;
  margin-bottom: 4rem;
  display: flex;
  font-weight: 400;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: 1.8rem;

  > span {
    color: var(--green);
  }
`;

export const Expense = styled(Income)`
  > span {
    color: var(--red);
  }
`;

export const Total = styled.h2`
  font-size: 2.4rem;
  color: var(--white);
  font-weight: 400;
`;
