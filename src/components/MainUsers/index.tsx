import { UserType } from "@common/interface/User";
import { Tweet } from "@components/Tweet";
import { getTweetsByUserId } from "@services/tweets";
import { getUserByUserId } from "@services/user";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tweet as TweetType } from "../../common/interface/Post";

import { ProfilePageUser } from "../ProfilePageUser";

import {
  BackIcon,
  BellIcon,
  BottomMenu,
  Container,
  EmailIcon,
  Header,
  HomeIcon,
  ProfileInfo,
  SearchIcon,
} from "./styles";

function MainUsers() {
  const { userId } = useParams();

  const [tweets, setTweets] = useState<TweetType[]>([]);
  const [users, setUsers] = useState<UserType[]>([]);

  async function getUser() {
    const response = await getUserByUserId(userId ?? "");

    setUsers(response);
  }

  useEffect(() => {
    getUser();
  }, [userId]);

  async function getTweetsByIdUser() {
    const response = await getTweetsByUserId(userId ?? "");

    setTweets(response);
  }

  useEffect(() => {
    getTweetsByIdUser();
  }, []);

  return (
    <Container>
      <Header>
        <a href="/home">
          <button>
            <BackIcon />
          </button>
        </a>

        <ProfileInfo>
          {users.length ? <strong>{users[0].name}</strong> : ""}

          <span>{tweets.length} Tweet(s)</span>
        </ProfileInfo>
      </Header>

      {users.length ? <ProfilePageUser user={users[0]} /> : ""}

      {tweets.map((tweet, index) => {
        return <Tweet tweet={tweet} key={index} />;
      })}

      <BottomMenu>
        <a href="/home">
          <HomeIcon />
        </a>

        <a href="/explore">
          <SearchIcon />
        </a>

        <a href="/profile">
          <BellIcon />
        </a>

        <a href="/message">
          <EmailIcon />
        </a>
      </BottomMenu>
    </Container>
  );
}

export { MainUsers };
