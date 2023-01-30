import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 80%;

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const Content = styled.div``;



export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  font-size: larger;
`;

export const Avatar = styled.img`
  width: 39px;
  height: 39px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--gray);
`;

export const SearchWrapper = styled.div``;

export const SearchInput = styled.input`
  font-size: 1.4rem;
  height: 5rem;
  width: 100%;
  border-radius: 19.5px;
  //   background: var(--search);

  &::placeholder {
    // color: var(--gray);
  }

  ~ svg {
    position: relative;
    top: -33px;
    left: 15px;
    z-index: 1;
    transition: 180ms ease-in-out;
  }

  outline: 0;

  &:focus {
    // border: 1px solid var(--twitter);

    ~ svg {
      //   fill: var(--twitter);
    }
  }
`;