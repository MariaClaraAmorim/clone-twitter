import React, { useEffect, useState } from "react";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

import { InterfacePerfil } from "../../common/interface/InterfacePerfil";
import { Post } from "../../common/interface/Post";
import { Avatar } from "../MainFeed/styles";
import {
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

  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <Body>
      <a href={"/user/" + userId}>
        <Avatar
          src={"https://avatars.dicebear.com/api/open-peeps/" + userId + ".svg"}
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
            <FaRegComment />9
          </Status>
          <Status>
            <AiOutlineRetweet />
            16
          </Status>
          <Status>
            <button onClick={openMenu}>
              {isOpen ? <FcLike /> : <AiOutlineHeart onClick={closeMenu} />}
            </button>
            57
          </Status>
        </Icons>
      </Content>
    </Body>
  );
}
export { PostTwitter };
