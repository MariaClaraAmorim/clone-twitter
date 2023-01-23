import React from "react";
import { SideBar } from "../SideBar";
import { MainFeed } from "../MainFeed";

import { Container, Wrapper } from "./styles";
import { MenuBar } from "../MenuBar";

function Home() {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <MainFeed />
        <SideBar />
      </Wrapper>
    </Container>
  );
}

export { Home };
