import React from "react";
import MainFeed from "../MainFeed";

import MenuBar from "../MenuBar";
import SideBar from '../SideBar';

import { Container, Wrapper } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />

        <MainFeed/>
        <SideBar />
      </Wrapper>
    </Container>
  );
};

export default Home;