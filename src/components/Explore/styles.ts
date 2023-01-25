import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 8px 9px 9px 13px;

  width: min(601px, 100%);
  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  z-index: 2;
  position: sticky;
  border-bottom: 1px solid var(--outline);
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  margin-bottom: 0.4rem;
  margin-top: 0.4rem;
  font-size: 1.1rem;
  flex-wrap: wrap;
  &.active {
    fill: var(--twitter);
  }
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  background-color: var(--twitter);
  height: 0.1rem;
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
