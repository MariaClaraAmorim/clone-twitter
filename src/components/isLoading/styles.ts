import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const BsTwitter = styled.div``;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 8.25px 0;
  outline: 0;
  cursor: pointer;
  border-radius: 25px;

  > svg {
    fill: var(--twitter);
    font-size: 10rem;
  }
`;
