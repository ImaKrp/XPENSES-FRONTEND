import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

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

const fromRight = keyframes`
  0% {
    transform: translateX(100px);
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

export const Container = styled.div`
  width: 100%;
  min-height: 8.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 4rem;

  @media (max-width: 510px) {
    padding: 2rem 1.5rem;
  }
`;

export const Group = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  animation: ${fromRight} 0.5s;
  gap: 1.8rem;
`;

export const Menu = styled(Link)`
  width: fit-content;
  height: fit-content;
  letter-spacing: 0.2rem;
  font-size: 3rem;
  color: var(--white);
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  animation: ${fromLeft} 0.5s;
  cursor: pointer;
  > span {
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const Redirect = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.6rem;
  font-size: 1.6rem;
  color: var(--white);
  font-weight: 400;
  border-radius: 0.6rem;
  border: 2px solid var(--purple);
  background-color: var(--black);
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s, opacity 0.3s;

  &:hover {
    opacity: 0.7;
    box-shadow: 0 0 0.8rem 0 rgba(0, 0, 0, 0.6);
  }
`;

export const SignOut = styled.button`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.6rem;
  font-size: 1.6rem;
  color: var(--white);
  font-weight: 400;
  border-radius: 0.6rem;
  border: 2px solid var(--purple);
  background-color: var(--black);
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s, opacity 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    box-shadow: 0 0 0.8rem 0 rgba(128, 128, 128, 0.4);
  }
`;
