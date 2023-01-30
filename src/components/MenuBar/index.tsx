import React from "react";

import Button from "../Button";

import { BsTwitter } from "react-icons/bs";

import {
  Container,
  Topside,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  // FavoriteIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
  SearchIcon,
} from "./styles";
import { useUserContext } from "@contexts/UserContext";

function MenuBar() {
  const { user, signOut } = useUserContext();

  return (
    <Container>
      <Topside>
        {/* fill="#33A1F2" */}
        <a href="/home">
          <MenuButton>
            <BsTwitter />
          </MenuButton>
        </a>

        <a href="/home">
          <MenuButton>
            <HomeIcon />
            <span>Página Inicial</span>
          </MenuButton>
        </a>

        <a href="/explore">
          <MenuButton>
            <SearchIcon />
            <span>Explore</span>
          </MenuButton>
        </a>

        <a href="">
          <MenuButton>
            <BellIcon />
            <span>Notificações</span>
          </MenuButton>
        </a>

        <a href="/message">
          <MenuButton>
            <EmailIcon />
            <span>Mensagens</span>
          </MenuButton>
        </a>

        {/*   <a href="">
          <MenuButton>
           <FavoriteIcon /> 
            <span>Favoritados</span>
          </MenuButton>
        </a>*/}

        {/* className="active" */}
        <a href="/profile">
          <MenuButton>
            <ProfileIcon />
            <span>Perfil</span>
          </MenuButton>
        </a>
        <Button>
          <span>Tweetar</span>
        </Button>
      </Topside>

      <Botside>
        <Avatar src={`${user?.photoURL}`} alt={`${user?.name}`} />

        <ProfileData>
          <strong>{user?.name}</strong>
          <span>{user?.userName}</span>
        </ProfileData>

        <ExitIcon onClick={signOut} />
      </Botside>
    </Container>
  );
}

export { MenuBar };
