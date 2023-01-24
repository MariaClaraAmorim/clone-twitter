import React from "react";
import { ExploreCard } from "../ExploreCard";

import { Container, Ul, SearchInput, SearchWrapper } from "./styles";

function Explore() {
  return (
    <>
      <Container>
        <SearchWrapper>
          <SearchInput placeholder="Buscar no twitter" />
        </SearchWrapper>
        <nav>
          <Ul>
            <li>Para você</li>
            <li>Assuntos do Momento</li>
            <li>Notícias</li>
            <li>Esportes</li>
            <li>Entretenimento</li>
          </Ul>
        </nav>
        <ExploreCard />
      </Container>
    </>
  );
}

export { Explore };
