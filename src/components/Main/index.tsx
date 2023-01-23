import React from "react";

import {ProfilePage} from '../ProfilePage';

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
} from './styles';

function Main() {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong> Maria Clara Amorim</strong>
          <span>612 Tweets</span>
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
};

export {Main};