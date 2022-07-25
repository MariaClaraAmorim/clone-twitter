import React from "react";

import Feed from "../Feed";

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

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar
          src="https://avatars.dicebear.com/api/micah/your-custom-seed.svg"
          alt=""
        />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Maria Clara</h1>
        <h2>@Kal</h2>

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
};

export default ProfilePage;
