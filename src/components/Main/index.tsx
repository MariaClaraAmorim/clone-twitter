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
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
}

export { Main };
