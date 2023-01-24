import React from "react";
import { SideBar } from "../SideBar";

import { Container, Wrapper } from "./styles";
import { MenuBar } from "../MenuBar";
import { Explore } from "../Explore";

function LayoutExplore() {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Explore />
        <SideBar />
      </Wrapper>
    </Container>
  );
}

export { LayoutExplore };
