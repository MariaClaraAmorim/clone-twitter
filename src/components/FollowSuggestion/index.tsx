import React, { useState } from "react";

import { Container, Avatar, Info, FollowButton } from "./styles";

interface Props {
  name: string;
  nickname: string;
}

const FollowSuggestion: React.FC<Props> = ({ nickname, name }) => {
  const [isSeguir, setIsSeguir] = useState(false);
  return (
    <Container>
      <div>
        <Avatar
          src="https://avatars.dicebear.com/api/open-peeps/%7Bid%7D.svg"
          alt=""
        />
        <Info>
          <strong>{name}</strong>
          <strong>{nickname}</strong>
        </Info>
      </div>
      <FollowButton outlined onClick={() => setIsSeguir((state) => !state)}>{isSeguir ? "Seguindo" : "Seguir"}</FollowButton>
    </Container>
  );
};

export default FollowSuggestion;
