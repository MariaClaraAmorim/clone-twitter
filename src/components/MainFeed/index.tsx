import Button from "@components/Button";
import { useUserContext } from "@contexts/UserContext";
import { getTweets, getTweetsByUserId, sendTweet } from "@services/tweets";
import { FormEvent, SetStateAction, useEffect, useState } from "react";
import { Post, Tweet } from "../../common/interface/Post";
import { PostTwitter } from "../PostTwitter";
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
  const [posts, setPosts] = useState<Post[]>([]);
  const [tweets, setTweets] = useState<Tweet[]>([]);

  async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    setPosts(await response.json());
  }

  async function getMyTweets() {
    const response = await getTweetsByUserId(user?.id ?? "");

    setTweets(response);
  }

  useEffect(() => {}, []);

  useEffect(() => {
    getMyTweets();
    getPosts();
  }, []);

  // const [editorValue, setEditorValue] = useState("");

  // const handleEditorValueChange = (e: {
  //   target: { value: SetStateAction<string> };
  // }) => {
  //   setEditorValue(e.target.value);
  // };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const tweetFormValue = formData.get("tweet");

    if (!tweetFormValue) return;

    await sendTweet({
      body: tweetFormValue.toString(),
      userId: user?.id ?? "",
    });
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
              <textarea name="tweet" placeholder="O que está acontecendo?" />
            </SearchWrapper>
          </Box>
          <Button type="submit">Tweetar</Button>
        </form>
      </Profile>

      {tweets.map((tweet, index) => {
        tweet.id = Math.floor(Math.random() * 100000).toString();
        tweet.userId = tweet.userId;

        return <PostTwitter key={index} {...tweet} />;
      })}

      {posts.map((post, index) => {
        return <PostTwitter key={index} {...post} />;
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
