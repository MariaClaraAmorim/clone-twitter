import React from "react";

import { MenuBar } from "../MenuBar";

import { SideBar } from "../SideBar";
import { MainUsers } from "../MainUsers";

import { Container, Wrapper } from "./styles";

function LayoutPerfilUsers() {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <MainUsers />
        <SideBar />
      </Wrapper>
    </Container>
  );
}

export { LayoutPerfilUsers };
