import { useUserContext } from "@contexts/UserContext";
import React from "react";

import { Feed } from "../Feed";

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from "./styles";

function ProfilePage() {
  const { user } = useUserContext();

  return (
    <Container>
      <Banner>
        <Avatar src={`${user?.photoURL}`} alt={`${user?.name}`} />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>{user?.name}</h1>
        <h2>{user?.userName}</h2>

        <ul>
          <li>
            <LocationIcon />
            Barreiras, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 22 de novembro de 2002
          </li>
        </ul>

        <Followage>
          <span>
            <strong> 94 </strong> seguindo
          </span>
          <span>
            <strong> 672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export { ProfilePage };
