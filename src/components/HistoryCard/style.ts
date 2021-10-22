import styled, { keyframes } from "styled-components";

interface IValueProps {
  negative: boolean;
}

const Appear = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: .3;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div<IValueProps>`
  width: 100%;
  display: flex;
  padding: 1rem 1.6rem;
  animation: ${Appear} 0.5s;
  position: relative;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  gap: 1rem;
  > .column {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    align-items: flex-start;
    justify-content: center;
    flex-grow: 1;
    font-size: 1.8rem;
    color: var(--white);
    > span {
      font-size: 1.8rem;
      color: rgb(124, 124, 124);
      text-transform: capitalize;
    }
  }

  > .row {
    display: flex;
    gap: 1rem;
    height: 100%;
    align-items: center;
    font-size: 1.8rem;
    color: ${({ negative }) => (negative ? "var(--red)" : "var(--green)")};
  }

  &:after {
    content: "";
    background-color: var(--purple);
    position: absolute;
    height: 2px;
    width: 100%;
    bottom: 0px;
    left: 0px;
  }
`;

export const DeleteBtn = styled.button`
  height: 2.4rem;
  width: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: var(--white);
  font-size: 2.2rem;

  transition: opacity 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
