import styled from "styled-components";

export const Container = styled.div`

`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  font-size: larger;
`;


export const SearchWrapper = styled.div`
  width: 100%;
`;

export const SearchInput = styled.input`
  font-size: 1rem;
  border-radius: 19.5px;
  outline: 0;
  border: 1px solid;
  padding: 0.8rem;
  background: var(--search);
  outline: 0;
  width: 100%;

  ~ svg {
    position: relative;
    top: -33px;
    left: 15px;
    z-index: 1;
    transition: 180ms ease-in-out;
  }

  outline: 0;
`;
