import React from "react";

import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";

import {FaRegComment} from "react-icons/fa";

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
            <FaRegComment />
              18
            </Status>
            <Status>
              <AiOutlineRetweet />
              18
            </Status>
            <Status>
              <AiOutlineHeart /> 
              85
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
