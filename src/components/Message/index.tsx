import {
  BellIcon,
  BottomMenu,
  EmailIcon,
  HomeIcon,
  SearchIcon,
} from "@components/Main/styles";
import React from "react";

import {
  Container,
  Title,
  Dot,
  Avatar,
  HeaderInfo,
  Profile,
  SearchInput,
  SearchWrapper,
  Botside,
  ProfileData,
} from "./styles";

function Message() {
  return (
    <>
      <Container>
        <Title>Mensagens</Title>
        <Profile>
          <SearchWrapper>
            <SearchInput placeholder="Pesquisar mensagens diretas" />
          </SearchWrapper>
        </Profile>

        <Botside>
          <Avatar
            src="https://avatars.dicebear.com/api/open-peeps/%7Bid%7D.svg"
            alt=""
          />
          <div>
            <ProfileData>
              <strong>nome</strong>
              <span>@usuario</span>
              <time>data mensagem</time>
            </ProfileData>
            <p>conteudo da mensagem</p>
          </div>

        </Botside>

        <BottomMenu>
          <a href="/home">
            <HomeIcon />
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

export { Message };
