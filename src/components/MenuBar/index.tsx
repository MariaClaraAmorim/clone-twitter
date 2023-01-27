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
  FavoriteIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
} from "./styles";
import { useUserContext } from "@contexts/UserContext";

function MenuBar() {
  const { user, signOut } = useUserContext();

  return (
    <Container>
      <Topside>
        {/* fill="#33A1F2" */}
        <MenuButton>
          <BsTwitter />
        </MenuButton>
        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        {/* className="active" */}
        <MenuButton>
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

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
