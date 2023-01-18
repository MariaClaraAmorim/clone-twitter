import React from "react";
import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  Profile,
  Avatar,
  SearchInput,
  SearchWrapper,
} from "./styles";

const MainFeed: React.FC = () => {
  return (
    <Container>
      <Header>
        <ProfileInfo>
          <strong> Página Inicial</strong>
          <nav>
            <ul>
              <li>Para você</li>
              <span></span>
              <li>Seguindo</li>
            </ul>
          </nav>
        </ProfileInfo>
      </Header>
      <Profile>
        <Avatar
          src="https://avatars.dicebear.com/api/micah/your-custom-seed.svg"
          alt=""
        />
        <SearchWrapper>
          <SearchInput placeholder=" que está acontecendo?" />
          {/* <SearchIcon /> */}
        </SearchWrapper>
      </Profile>
    </Container>
  );
};

export default MainFeed;
