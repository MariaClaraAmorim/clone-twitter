import React from "react";

import { Container } from "./styles";
import * as C from "./styles";
import { BsTwitter } from "react-icons/bs";
function Loading() {
  return (
    <Container>
      <C.MenuButton>
        <BsTwitter />
      </C.MenuButton>
    </Container>
  );
}

export { Loading };
