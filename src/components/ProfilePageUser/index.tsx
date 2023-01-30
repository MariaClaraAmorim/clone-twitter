import React, { useEffect, useState } from "react";
import { InterfacePerfil } from "../../common/interface/InterfacePerfil";
import { Post } from "../../common/interface/Post";

import {
  Avatar,
  Banner,
  CakeIcon,
  Container,
  Followage,
  LocationIcon,
  ProfileData,
} from "./styles";

function ProfilePageUser({ userId, body }: Post) {
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

  return (
    <Container>
      <Banner>
        <Avatar
          src={"https://avatars.dicebear.com/api/open-peeps/" + userId + ".svg"}
          alt="Imagem avatar"
        />
      </Banner>

      <ProfileData>
        <h1>{users?.name}</h1>

        <strong>{body}</strong>

        {/* <ul>
          <li>
            <LocationIcon />
            Barreiras, Bahia
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 22 de novembro de 2002
          </li>
        </ul> */}

        <Followage>
          <span>
            <strong> 94 </strong> seguindo
          </span>
          <span>
            <strong> 672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
}

export { ProfilePageUser };
