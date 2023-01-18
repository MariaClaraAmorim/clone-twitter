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


const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <MenuButton>
          <BsTwitter fill="#33A1F2" />
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

        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>
      </Topside>

      <Botside>
        <Avatar
          src="https://avatars.dicebear.com/api/micah/your-custom-seed.svg"
          alt=""
        />

        <ProfileData>
          <strong>Maria</strong>
          <span>@Kal</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;
