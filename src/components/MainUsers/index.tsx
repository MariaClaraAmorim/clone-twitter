import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InterfacePerfil } from "../../common/interface/InterfacePerfil";
import { Post } from "../../common/interface/Post";
import { PostMessage } from "../PostMessage";

import { ProfilePageUser } from "../ProfilePageUser";

import {
  BackIcon,
  BellIcon,
  BottomMenu,
  Container,
  EmailIcon,
  Header,
  HomeIcon,
  ProfileInfo,
  SearchIcon,
} from "./styles";

function MainUsers() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<InterfacePerfil>();

  const { userId } = useParams();

  async function getInfoUser() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + userId
    );

    setUsers(await response.json());
  }

  useEffect(() => {
    getInfoUser();
  }, []);

  async function getPosts() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=" + userId
    );

    setPosts(await response.json());
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Container>
      <Header>
        <a href="/home">

        <button>
          <BackIcon />
        </button>
        </a>

        <ProfileInfo>
          <strong>{users?.name}</strong>

          <span>612 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePageUser
        body={"Essa é a minha bio xoxa e capenga"}
        id={Number(userId)}
        title={""}
        userId={Number(userId)}
      />

      {posts.map((post) => {
        return <PostMessage {...post} />;
      })}

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
