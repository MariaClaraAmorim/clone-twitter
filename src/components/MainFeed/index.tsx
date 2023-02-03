import Button from "@components/Button";
import { Tweet } from "@components/Tweet";
import { useUserContext } from "@contexts/UserContext";
import { getTweets, sendTweet } from "@services/tweets";
import { FormEvent, useEffect, useState } from "react";
import { Tweet as TweetType } from "../../common/interface/Post";
import {
  Avatar,
  BellIcon,
  BottomMenu,
  Box,
  Container,
  EmailIcon,
  Header,
  HomeIcon,
  Profile,
  ProfileInfo,
  SearchIcon,
  SearchWrapper,
  Ul,
} from "./styles";

function MainFeed() {
  const { user } = useUserContext();
  const [tweets, setTweets] = useState<TweetType[]>([]);
  const [att, setAtt] = useState(false);
  const [contentTweet, setContentTweet] = useState("");

  async function getAllTweets() {
    const response = await getTweets();

    setTweets(response);
  }

  useEffect(() => {
    getAllTweets();
  }, [att]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!contentTweet) return;

    await sendTweet({
      body: contentTweet,
      userId: user?.userId ?? "",
    });

    setContentTweet("");
  };

  return (
    <Container>
      <Header>
        <ProfileInfo>
          <strong>Página Inicial</strong>
          <nav>
            <Ul>
              <li>Para você</li>
              <li>Seguindo</li>
            </Ul>
          </nav>
        </ProfileInfo>
      </Header>

      <Profile>
        <form onSubmit={handleSubmit}>
          <Box>
            <Avatar src={`${user?.photoURL}`} alt="Imagem avatar" />
            <SearchWrapper>
              <textarea
                name="tweet"
                placeholder="O que está acontecendo?"
                value={contentTweet}
                onChange={(e: any) => {
                  const value = e.target.value;

                  setContentTweet(value);
                }}
              />
            </SearchWrapper>
          </Box>
          <Button type="submit" onClick={() => setAtt((state) => !state)}>
            Tweetar
          </Button>
        </form>
      </Profile>

      {tweets.map((tweet, index) => {
        tweet.id = Math.floor(Math.random() * 100000).toString();
        tweet.userId = tweet.userId;

        return <Tweet key={index} tweet={tweet} />;
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

export { MainFeed };
