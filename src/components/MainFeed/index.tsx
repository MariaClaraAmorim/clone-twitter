import { useUserContext } from "@contexts/UserContext";
import React, { useEffect, useState } from "react";
import { Post } from "../../common/interface/Post";
import { PostTwitter } from "../PostTwitter";
import {
  Avatar,
  Container,
  Header,
  Profile,
  ProfileInfo,
  SearchInput,
  SearchWrapper,
  Ul,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from "./styles";

function MainFeed({ body, userId, id }: Post) {
  const { user } = useUserContext();
  const [posts, setPosts] = useState<Post[]>([]);

  async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    setPosts(await response.json());
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Container>
      <Header>
        <ProfileInfo>
          <strong>Página Inicial</strong>
          <nav>
            <Ul>
              <li>Para você</li>
              <li>Seguindo</li>
            </Ul>
          </nav>
        </ProfileInfo>
      </Header>
      <Profile>
        <Avatar src={`${user?.photoURL}`} alt="Imagem avatar" />
        <SearchWrapper>
          <SearchInput placeholder="O que está acontecendo?" />
        </SearchWrapper>
      </Profile>

      {posts.map((post, index) => {
        return <PostTwitter key={index} {...post} />;
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

export { MainFeed };
