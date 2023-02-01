// import { Container, Nome, Texto, Infos } from "./styles";

import { useEffect, useState } from "react";
import { InterfacePerfil } from "../../common/interface/InterfacePerfil";
import { Post } from "../../common/interface/Post";
import React from "react";
import {
  Container,
  Retweeted,
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
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

function PostMessage({ body, userId, id }: Post) {
  const [posts, setPosts] = useState<Post[]>([]);

  async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    setPosts(await response.json());
  }

  useEffect(() => {
    getPosts();
  }, []);

  const [users, setUsers] = useState<InterfacePerfil>();

  async function getInfoUser() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + userId
    );

    setUsers(await response.json());
  }

  useEffect(() => {
    getInfoUser();
  }, []);

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
        <AvatarUser
          src={"https://avatars.dicebear.com/api/open-peeps/" + userId + ".svg"}
          alt="Imagem avatar"
        />

        <Content>
          <Header>
            <strong> {users?.name}</strong>
            <span>{users?.email}</span>
            <Dot />
            <time>02 de jun</time>
          </Header>

          <Description> {body} </Description>

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
    // <Container>
    //   <Infos>
    //     <Nome>{users?.name}</Nome>
    //     <Texto>{body}</Texto>
    //   </Infos>
    //   <br />
    // </Container>
  );
}

export { PostMessage };
