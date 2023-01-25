import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InterfacePerfil } from "../../common/interface/InterfacePerfil";
import { Post } from "../../common/interface/Post";

import { ProfilePageUser } from "../ProfilePageUser";

import {
  BackIcon, BellIcon, BottomMenu, Container, EmailIcon, Header, HomeIcon, ProfileInfo, SearchIcon
} from "./styles";

function MainUsers() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [user, setUser] = useState<InterfacePerfil>();

  const { userId, postId } = useParams();

  async function getPosts() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?id=" + postId
    );

    setPosts(await response.json());
  }

  useEffect(() => {
    getPosts();
  }, []);


  async function getInfoUser() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + userId
    );

    setUser(await response.json());
  }

  useEffect(() => {
    getInfoUser();
  }, []);

  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>{user?.name}</strong>

          <span>612 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePageUser body={""} id={0} title={""} userId={0} />

      <BottomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
}

export { MainUsers };

