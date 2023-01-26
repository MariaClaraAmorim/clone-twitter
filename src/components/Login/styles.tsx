// export const Container = styled.div`
// `;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(91, 112, 131, 0.4);
  gap: 10px;
  height: 100vh;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: var(--primary);
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;

  @media (max-width: 400px) {
    width: 80%;

  }
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #fff;
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #fff;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: var(--twitter);
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: var(--twitter);
  }
`;

export const BsTwitter = styled.div`
  color: var(--twitter);
`;

export const FcGoogle = styled.div`
  color: var(--twitter);
`;



export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    > span,
    a {
      display: inline;
      margin-left: 19px;

      font-weight: bold;
      font-size: 19px;
    }

    padding-right: 15px;
  }

  padding: 8.25px 0;
  outline: 0;

  & + button {
    margin-top: 16.5px;
  }

  & + button:last-child {
    margin-top: 33px;

    width: 40px;
    height: 40px;

    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }
    }
  }

  cursor: pointer;
  border-radius: 25px;

  > svg {
    fill: #fff;
    font-size: 2rem;

    &:hover {
      color: var(--twitter);
      fill: var(--twitter);
    }
  }
`;

export const Span = styled.span`
`;
