import React from "react";

import { MenuBar } from "../MenuBar";
import { Main } from "../Main";
import { SideBar } from "../SideBar";

import { Container, Wrapper } from "./styles";

function Message() {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <SideBar />
      </Wrapper>
    </Container>
  );
}

export { Message };
