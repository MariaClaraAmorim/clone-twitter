import { UserType } from "@common/interface/User";

import {
  Avatar,
  Banner,
  CakeIcon,
  Container,
  Followage,
  LocationIcon,
  ProfileData,
} from "./styles";

interface Props {
  user: UserType;
}

function ProfilePageUser({ user }: Props) {
  return (
    <Container>
      <Banner>
        <Avatar src={user.photoURL} alt={user.name} />
      </Banner>

      <ProfileData>
        <h1>{user.name}</h1>

        <i>{user.userName}</i>

        <strong>{user.bio}</strong>

        <ul>
          <li>
            <LocationIcon />
            Barreiras, Bahia
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em {new Date(user.birth ?? "").toLocaleDateString()}
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
    </Container>
  );
}

export { ProfilePageUser };
