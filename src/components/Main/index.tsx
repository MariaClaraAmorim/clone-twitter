import { useUserContext } from "@contexts/UserContext";
import React from "react";

import { ProfilePage } from "../ProfilePage";

import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from "./styles";

function Main() {
  const { user } = useUserContext();

  return (
    <Container>
      <Header>
        <a href="/home">
          <button>
            <BackIcon />
          </button>
        </a>

        <ProfileInfo>
          <strong> {user?.name} </strong>
          <span> Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <BottomMenu>
        <a href="/home">
          <HomeIcon />
        </a>

        <a href="/explore">
          <SearchIcon />
        </a>

        <a href="/profile">
          <BellIcon />
        </a>
        
        <a href="/message">
          <EmailIcon />
        </a>
      </BottomMenu>
    </Container>
  );
}

export { Main };
