import React from "react";

import List from "../List";
import FollowSuggestion from "../FollowSuggestion";

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from "./styles";
import { News } from "@components/News";

function SideBar() {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <List
          title="Talvez você curta"
          elements={[
            <FollowSuggestion
              name="Fhellipy Santana"
              nickname="@Fhellipy.santana"
            />,
            <FollowSuggestion name="Flavia Rodrigues" nickname="@flavinha" />,
            <FollowSuggestion name="Vitória Montino" nickname="@Vi_Montino" />,
          ]}
        />
        <List
          title="O que está acontecendo"
          elements={[<News />]}
        />  
      </Body>
    </Container>
  );
}

export { SideBar };
