import React from "react";

import { Container, Content, Dot } from "./styles";

function ExploreCard() {
  return (
    <>
      <Container>
        <Content>
          <span>Assunto do momento</span>
          <strong>Programação</strong>
          <span>18,8 mil tweets</span>
        </Content>
      </Container>
    </>
  );
}

export { ExploreCard };
