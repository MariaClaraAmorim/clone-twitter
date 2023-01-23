import React, { useEffect, useState } from "react";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { Post } from "../../common/interface/Post";
import { Avatar } from "../MainFeed/styles";
import {
  Body,
  HeaderInfo,
  Content,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
} from "./styles";


function PostTwitter({ body, userId, id }: Post) {
  // const [users, setUsers] = useState<InterfacePerfil>();

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
  return (
    <Body>
      <Avatar
        src={"https://avatars.dicebear.com/api/open-peeps/" + userId + ".svg"}
        alt="Imagem avatar"
      />

      <Content>
        <HeaderInfo>
          <strong>{users?.name}</strong>
          <span>@Fulano</span>
          <Dot />
          <time>23 jan</time>
        </HeaderInfo>

        <Description> {body} </Description>

        <ImageContent src="https://www.gerarmemes.com.br/uploads/galeria/meme-611-meme-pica-pau-cataratas-gerador-de-memes.jpg" />

        <Icons>
          <Status>
            <FaRegComment />9
          </Status>
          <Status>
            <AiOutlineRetweet />
            16
          </Status>
          <Status>
            <AiOutlineHeart />
            57
          </Status>
        </Icons>
      </Content>
    </Body>
  );
}
export { PostTwitter };
