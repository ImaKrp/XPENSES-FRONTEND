import styled from "styled-components";

export const SelectElement = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
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
  text-transform: capitalize;
  &:hover {
    opacity: 0.7;
    box-shadow: 0 0 0.8rem 0 rgba(0, 0, 0, 0.6);
  }

  > option {
    text-transform: capitalize;
  }
`;
