import React from "react";

import { MenuBar } from "../MenuBar";
import { Main } from "../Main";
import { SideBar } from "../SideBar";

import { Container, Wrapper } from "./styles";
import { Message } from "../Message";
import { SpanMessage } from "../SpanMessage";

function LayoutMessage() {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Message/>
        <SpanMessage />
      </Wrapper>
    </Container>
  );
}

export { LayoutMessage };
