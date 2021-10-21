import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100vw;
  padding-top: 4rem;
  min-height: calc(100vh - 8.4rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: url("/images/wave.svg");
  background-repeat: no-repeat;
  background-position-y: bottom;
`;

export const Title = styled.h1`
  color: var(--purple);
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  letter-spacing: 0.2rem;
  font-size: 12.8rem;
  @media (max-width: 1220px) {
    text-align: center;
  }
`;

export const Subtitle = styled.h1`
  color: var(--w400);
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  letter-spacing: 0.2rem;
  font-size: 3.6rem;
  width: 50rem;
  @media (max-width: 1220px) {
    text-align: center;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1220px) {
    align-items: center;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8rem;
`;

export const Image = styled.img`
  width: 50rem;
  height: 50rem;

  @media (max-width: 1220px) {
    display: none;
  }
`;

export const Login = styled(Link)`
  width: 18rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1rem;
  font-weight: 500;
  border-radius: 0.6rem;
  color: var(--white);
  background-color: var(--purple);
  font-size: 1.6rem;
  border: 2px solid var(--black);
  transition: box-shadow 0.3s, opacity 0.3s;
  margin-top: 2rem;

  &:hover {
    opacity: 0.7;
  }

  &:focus {
    box-shadow: 0 0 0 2px var(--purple);
  }
`;
