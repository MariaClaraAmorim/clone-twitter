import React from "react";

import {
  Container,
  Title,
  Content,
  Description,
  Dot,
  Avatar,
  // ImageContent,
  HeaderInfo,
  Profile,
  SearchInput,
  SearchWrapper,
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
        <Content>
          <HeaderInfo>
            <Avatar
              src="https://avatars.dicebear.com/api/open-peeps/%7Bid%7D.svg"
              alt=""
            />

            <strong>Fulano</strong>
            <span>@FulanoTal</span>
            <Dot />
            <time>23 jan</time>
          </HeaderInfo>
          <div>
            <Description> enviou um link </Description>
          </div>
        </Content>
        <Content>
          <HeaderInfo>
            <Avatar
              src="https://avatars.dicebear.com/api/open-peeps/%7Bid%7D.svg"
              alt=""
            />

            <strong>Fulano</strong>
            <span>@FulanoTal</span>
            <Dot />
            <time>23 jan</time>
          </HeaderInfo>
          <div>
            <Description> enviou um link </Description>
          </div>
        </Content>
        <Content>
          <HeaderInfo>
            <Avatar
              src="https://avatars.dicebear.com/api/open-peeps/%7Bid%7D.svg"
              alt=""
            />

            <strong>Fulano</strong>
            <span>@FulanoTal</span>
            <Dot />
            <time>23 jan</time>
          </HeaderInfo>
          <div>
            <Description> enviou um link </Description>
          </div>
        </Content>
        <Content>
          <HeaderInfo>
            <Avatar
              src="https://avatars.dicebear.com/api/open-peeps/%7Bid%7D.svg"
              alt=""
            />

            <strong>Fulano</strong>
            <span>@FulanoTal</span>
            <Dot />
            <time>23 jan</time>
          </HeaderInfo>
          <div>
            <Description> enviou um link </Description>
          </div>
        </Content>
      </Container>
    </>
  );
}

export { Message };
