import React, { useEffect, useState } from "react";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

import { InterfacePerfil } from "../../common/interface/InterfacePerfil";
import { Post } from "../../common/interface/Post";
import { Avatar } from "../MainFeed/styles";
import {
  Container,
  Retweeted,
  Body,
  Content,
  Description,
  Dot,
  HeaderInfo,
  Icons,
  ImageContent,
  Status,
} from "./styles";

function PostTwitter({ body, userId, id }: Post) {
  const [users, setUsers] = useState<InterfacePerfil>();
  const urlImageUser =
    "https://avatars.dicebear.com/api/open-peeps/" + userId + ".svg";

  async function getInfoUser() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + userId
    );

    setUsers(await response.json());
  }

  useEffect(() => {
    getInfoUser();
  }, []);

  const thumbnailUrl = "https://via.placeholder.com/150";

  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);

  return (
    <Container>
      {isRetweeted ? (
        <Retweeted>
          <AiOutlineRetweet />
          <p>Você retweetou</p>
        </Retweeted>
      ) : (
        ""
      )}
      <Body>
        <a href={"/user/" + userId}>
          <Avatar
            src={
              "https://avatars.dicebear.com/api/open-peeps/" + userId + ".svg"
            }
            alt="Imagem avatar"
          />
        </a>

        <Content>
          <HeaderInfo>
            <strong>{users?.name}</strong>
            <span>{users?.email}</span>
            <Dot />
            <time>23 jan</time>
          </HeaderInfo>
          <Description> {body} </Description>
          <ImageContent src={thumbnailUrl} />
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
          </Icons>{" "}
        </Content>
      </Body>
    </Container>
  );
}
export { PostTwitter };
