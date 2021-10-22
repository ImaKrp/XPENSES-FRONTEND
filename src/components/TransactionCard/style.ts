import styled, { keyframes } from "styled-components";

interface IAmountProps {
  negative: boolean;
}

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

export const Container = styled.form`
  width: 100%;
  border-radius: 1rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 0.8rem;
  animation: ${fromLeft} 0.5s;
  box-shadow: 0 0.6rem 1.6rem 0 rgba(0, 0, 0, 0.8);
`;

export const Title = styled.h3`
  color: var(--white);
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 1.8rem;
  margin-bottom: 1.4rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 4.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  background-color: var(--b600);
  color: var(--white);
  font-size: 1.6rem;
  padding: 0 1rem;

  border: 1px solid var(--b700);
  transition: border 0.3s;
  &:focus {
    border: 1px solid var(--b500);
  }
`;

export const InputDiv = styled.div`
  width: 100%;
  height: 7.4rem;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 1.4rem;
  color: var(--w400);
  line-height: 3rem;
  font-weight: 400;
  margin-left: 0.8rem;
`;

export const SpanError = styled.span`
  color: var(--red);
  font-size: 1.6rem;
  font-weight: 300;
  user-select: none;
`;

export const SubmitBtn = styled.button`
  width: 100%;
  height: 5.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1rem;
  font-weight: 500;
  border-radius: 1rem;
  margin-top: 1rem;
  color: var(--white);
  background-color: var(--purple);
  font-size: 1.6rem;
  border: 2px solid var(--black);
  transition: box-shadow 0.3s, opacity 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }

  &:focus {
    box-shadow: 0 0 0 2px var(--purple);
  }
`;

export const AmountDiv = styled.div`
  width: 100%;
  display: flex;
`;

export const AmountBtn = styled.button<IAmountProps>`
  width: 15%;
  height: 4.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem 0 0 1rem;
  background-color: var(--b600);
  color: ${({ negative }) => (negative ? "var(--red)" : "var(--green)")};
  font-size: 2.6rem;
  border-right: 0;
  padding: 0 1rem;
  cursor: pointer;
  border: 1px solid var(--b700);
  transition: border 0.3s, color 0.3s, opacity 0.3s;
  &:hover {
    opacity: 0.8;
  }
  &:focus {
    border: 1px solid var(--b500);
  }
`;

export const AmountInput = styled(Input)`
  width: 85%;
  border-radius: 0 1rem 1rem 0;
`;
