import React from "react";

import {Tweet} from "../Tweet";

import { Container, Tab, Tweets } from "./styles";

function Feed() {
  return (
    <Container>
      <Tab> Tweets </Tab>
      <Tweets>
        <Tweet />
      </Tweets>
    </Container>
  );
}

export { Feed };
