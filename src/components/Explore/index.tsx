import React from "react";
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
              <li>Notícias</li>
              <li>Esportes</li>
              <li>Entretenimento</li>
            </Ul>
          </nav>
        </Header>
        <ExploreCard />
        <ExploreCard />
      </Container>
    </>
  );
}

export { Explore };
