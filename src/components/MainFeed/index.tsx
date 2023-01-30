import Button from "@components/Button";
import { useUserContext } from "@contexts/UserContext";
import { sendTweet } from "@services/tweets";
import {
  FormEvent,
  SetStateAction,
  useEffect,
  useState
} from "react";
import { Post } from "../../common/interface/Post";
import { PostTwitter } from "../PostTwitter";
import {
  Avatar,
  BellIcon,
  BottomMenu, Box, Container,
  EmailIcon,
  Header,
  HomeIcon,
  Profile,
  ProfileInfo,
  SearchIcon, SearchWrapper,
  Ul
} from "./styles";

function MainFeed() {
  const { user } = useUserContext();
  const [posts, setPosts] = useState<Post[]>([]);

  async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    setPosts(await response.json());
  }

  useEffect(() => {
    getPosts();
  }, []);

  const [editorValue, setEditorValue] = useState("");

  const handleEditorValueChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEditorValue(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const tweetFormValue = formData.get("tweet");

    if (!tweetFormValue) return;

    await sendTweet({
      text: tweetFormValue.toString(),
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
        <form className="compose-form" onSubmit={handleSubmit}>
          <Box>
            <Avatar src={`${user?.photoURL}`} alt="Imagem avatar" />
            <SearchWrapper>
              <textarea name="tweet" placeholder="O que está acontecendo?" />
            </SearchWrapper>
          </Box>
          <Button type="submit">Tweetar</Button>
        </form>
      </Profile>
   
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
