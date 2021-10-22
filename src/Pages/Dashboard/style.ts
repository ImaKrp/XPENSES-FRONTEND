import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: calc(100vh - 8.4rem);
  display: flex;
  flex-wrap: wrap;
  padding: 3rem;
  align-items: center;
  justify-content: space-between;
`;

export const Column = styled.div`
  min-width: 35rem;
  width: 25%;
  height: calc(100vh - 14.4rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
