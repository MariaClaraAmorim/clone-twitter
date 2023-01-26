import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { InterfacePerfil } from "../../common/interface/InterfacePerfil";
import { Post } from "../../common/interface/Post";

import { Feed } from "../Feed";
import { PostMessage } from "../PostMessage";

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
} from "./styles";

function ProfilePageUser({ userId }: Post) {
  const [posts, setPosts] = useState<Post[]>([]);

  async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    setPosts(await response.json());
  }

  useEffect(() => {
    getPosts();
  }, []);
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
    <Container>
      <Banner>
        <Avatar
          src={"https://avatars.dicebear.com/api/open-peeps/" + userId + ".svg"}
          alt="Imagem avatar"
        />
      </Banner>

      <ProfileData>
        <h1></h1>
        <h2></h2>

        <ul>
          <li>
            <LocationIcon />
            {users?.street}
            <strong>{users?.name}</strong>
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 22 de novembro de 2002
          </li>
        </ul>

        <Followage>
          <span>
            <strong> 94 </strong> seguindo
          </span>
          <span>
            <strong> 672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      {posts.map((post) => {
        return <PostMessage {...post} />;
      })}

      {/* <Feed /> */}
    </Container>
  );
}

export { ProfilePageUser };
