import styled from "styled-components";

import { ExitToApp } from "../../styles/Icons";

export const IconExit = styled(ExitToApp)`
  display: none;
  height: 25px;
  
  @media (max-width: 800px) {
      display: inline-block;
      color: var(--white);
      cursor: pointer;

    &:hover {
      > path {
        color: var(--like);
      }
    }
  }
`;