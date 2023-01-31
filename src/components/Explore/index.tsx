import { BellIcon, BottomMenu, EmailIcon, HomeIcon, SearchIcon } from "@components/Main/styles";
import React from "react";
import { ExploreBanner } from "../ExploreBanner";
import { ExploreCard } from "../ExploreCard";

import {
  Container,
  Header,
  Ul,
  Li,
  SearchInput,
  SearchWrapper,
} from "./styles";

function Explore() {
  return (
    <>
      <Container>
        <Header>
          <SearchWrapper>
            <SearchInput placeholder="Buscar no twitter" />
          </SearchWrapper>
          <nav>
            <Ul>
              <li>Para você</li>
              <Li className="active">Assuntos do Momento</Li>
              <li>Esportes</li>
              <li>Entretenimento</li>
            </Ul>
          </nav>
        </Header>

        <ExploreBanner />
        <ExploreCard />

        <BottomMenu>
        <a href="/home">
          <HomeIcon  />
        </a>

        <a href="/explore">
          <SearchIcon />
        </a>

        <a href="/profile">
          <BellIcon />
        </a>
        
        <a href="/message">
          <EmailIcon />
        </a>
      </BottomMenu>
      </Container>
    </>
  );
}

export { Explore };
