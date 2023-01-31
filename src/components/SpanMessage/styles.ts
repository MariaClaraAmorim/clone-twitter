import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  width: min(500px, 100%);
  align-self: center;
  text-align: center;
  padding: 9px 19px 20px;
  max-height: 100vh;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Aviso = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    display: flex;
    gap: 1rem;
  }
`;

export const Button = styled.button`
  background-color: var(--twitter);
  color: #fff;
  border-radius: 1rem;
  padding: 0.6rem;
`;
