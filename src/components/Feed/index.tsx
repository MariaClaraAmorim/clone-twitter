import { Tweet as TweetType } from "@common/interface/Post";
import { useUserContext } from "@contexts/UserContext";
import { getTweetsByUserId } from "@services/tweets";
import React, { useEffect, useState } from "react";

import { Tweet } from "../Tweet";

import { Container, Tab, Tweets } from "./styles";

function Feed() {
  const { user } = useUserContext();

  const [tweets, setTweets] = useState<TweetType[]>([]);

  async function getMyTweets() {
    const userId = user?.userId ?? "";
    const response = await getTweetsByUserId(userId);

    setTweets(response);
  }

  useEffect(() => {
    getMyTweets();
  }, []);

  return (
    <Container>
      <Tab> Tweets </Tab>
      <Tweets>
        {tweets.map((tweet, index) => {
          return <Tweet tweet={tweet} key={index} />;
        })}
      </Tweets>
    </Container>
  );
}

export { Feed };
