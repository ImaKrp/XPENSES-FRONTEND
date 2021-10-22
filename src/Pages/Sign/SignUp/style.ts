import styled, { keyframes } from "styled-components";

interface IInputProps {
  isOnError: string;
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

const fromBottom = keyframes`
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  50% {
    opacity: .3;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100vw;
  min-height: calc(100vh - 8.4rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
  gap: 4rem;
  justify-content: flex-start;
  background-image: url("/images/wave.svg");
  background-repeat: no-repeat;
  background-position-y: bottom;
`;

export const Card = styled.form`
  width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
  justify-content: center;
  box-shadow: 0 1.2rem 1.6rem 0 rgba(0, 0, 0, 0.3);
  border-radius: 0.8rem;
  padding: 2.5rem;
  animation: ${fromBottom} 0.5s;
`;

export const Input = styled.input<IInputProps>`
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

  border: 1px solid
    ${({ isOnError }) => (isOnError ? "var(--warning)" : "var(--b700)")};
  transition: border 0.3s;
  &:focus {
    border: 1px solid
      ${({ isOnError }) => (isOnError ? "var(--warning)" : "var(--b500)")};
  }
`;

export const InputDiv = styled.div`
  width: 100%;
  height: 9.4rem;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 1.4rem;
  color: var(--white);
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

export const Title = styled.h1`
  color: var(--w400);
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 3.6rem;
  width: 50rem;
  text-align: center;
  animation: ${fromLeft} 0.5s;
  @media (max-width: 660px) {
    width: 80%;
  }
`;
