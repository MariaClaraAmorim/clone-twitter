import React from "react";

import { AiOutlineRetweet } from "react-icons/ai";

import {
  Container,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from "./styles";

const Tweet: React.FC = () => {
  return (
    <Container>
      <div>
        <AiOutlineRetweet />
        Você retweetou
      </div>


      
      <Body>
        <Avatar src="https://avatars.dicebear.com/api/micah/your-custom-seed.svg" />

        <Content>
          <Header>
            <strong>Maria Clara Amorim</strong>
            <span>@Kal</span>
            <Dot />
            <time>02 de jun</time>
          </Header>

          <Description> 🚀 </Description>

          <ImageContent src="https://www.gerarmemes.com.br/uploads/galeria/meme-611-meme-pica-pau-cataratas-gerador-de-memes.jpg" />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <AiOutlineRetweet />
              18
            </Status>
            <Status>
              <LikeIcon />
              85
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
