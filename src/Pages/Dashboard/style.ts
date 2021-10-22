import styled, { keyframes } from "styled-components";

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
  width: 100vw;
  min-height: calc(100vh - 8.4rem);
  display: flex;
  padding: 0 3rem 3rem 3rem;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 750px) {
    padding: 2rem 3rem;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`;

export const Column = styled.div`
  min-width: 30rem;
  width: 25%;
  height: calc(100vh - 11.4rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  @media (max-width: 750px) {
    height: auto;
    width: 100%;
  }
`;

export const History = styled.div`
  min-width: 30rem;
  flex-grow: 1;
  height: calc(100vh - 11.4rem);
  display: flex;
  flex-direction: column;
  padding: 0 2rem 2rem 2rem;
  border-radius: 1rem;
  animation: ${fromRight} 0.5s;
  box-shadow: 0 0.6rem 1.6rem 0 rgba(0, 0, 0, 0.8);

  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const Scroll = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: inherit;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--b600);
    border-radius: 3px;
  }
`;

export const HistoryTitle = styled.h3`
  color: var(--white);
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 2.4rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

