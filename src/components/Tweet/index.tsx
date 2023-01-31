import { useUserContext } from "@contexts/UserContext";
import React, { useState } from "react";

import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";

import { FaRegComment } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

import {
  Container,
  Body,
  Avatar,
  AvatarUser,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
} from "./styles";

function Tweet() {
  const { user } = useUserContext();

  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);

  return (
    <Container>
        <div>
          {/* <AiOutlineRetweet /> */}
          {isRetweeted ? 
          
          "Você retweetou"  : ""}
        </div>

      <Body>
        <AvatarUser src={`${user?.photoURL}`} />

        <Content>
          <Header>
            <strong>{user?.name}</strong>
            <span>{user?.userName}</span>
            <Dot />
            <time>02 de jun</time>
          </Header>

          <Description> 🚀 </Description>

          <ImageContent src="https://www.gerarmemes.com.br/uploads/galeria/meme-611-meme-pica-pau-cataratas-gerador-de-memes.jpg" />

          <Icons>
            <Status>
              <FaRegComment />
            </Status>
            <Status>
              <button onClick={() => setIsRetweeted((state) => !state)}>
                {isRetweeted ? (
                  <AiOutlineRetweet fill="var(--retweet)" />
                ) : (
                  <AiOutlineRetweet />
                )}
                {isRetweeted ? 1 : ""}
              </button>
            </Status>

            <Status>
              <button onClick={() => setIsLiked((state) => !state)}>
                {isLiked ? <FcLike /> : <AiOutlineHeart />}
                {isLiked ? 1 : ""}
              </button>
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export { Tweet };
