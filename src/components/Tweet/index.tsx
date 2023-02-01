import { Tweet as TweetType } from "@common/interface/Post";
import { UserType } from "@common/interface/User";
import { getUserByUserId } from "@services/user";
import { useEffect, useState } from "react";

import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";

import { FaRegComment } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

import {
  AvatarUser,
  Body,
  Container,
  Retweeted,
  Content,
  Description,
  Dot,
  Header,
  Icons,
  ImageContent,
  Status,
} from "./styles";

interface TweetProps {
  tweet: TweetType;
}

function Tweet({ tweet }: TweetProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);
  const [users, setUsers] = useState<UserType[]>([]);

  async function getUser() {
    const response = await getUserByUserId(tweet.userId);

    setUsers(response);
  }

  useEffect(() => {
    getUser();
  }, [tweet.userId]);

  return (
    <Container>
      <div>
        {isRetweeted ? (
          <Retweeted>
            <AiOutlineRetweet />
            <p>Você retweetou</p>
          </Retweeted>
        ) : (
          ""
        )}
      </div>

      <Body>
        {users.length ? (
          <a href={`/user/${users[0].userId}`}>
            <AvatarUser src={users[0].photoURL} alt={users[0].name} />
          </a>
        ) : (
          ""
        )}

        <Content>
          <Header>
            {users.length ? (
              <a href={`/user/${users[0].userId}`}>
                <strong>{users[0].name}</strong>
                <span>{users[0].userName}</span>
              </a>
            ) : (
              ""
            )}

            <Dot />
            <p>{tweet.created_at}</p>
          </Header>

          <Description>{tweet.body}</Description>

          <ImageContent src="https://www.gerarmemes.com.br/uploads/galeria/meme-611-meme-pica-pau-cataratas-gerador-de-memes.jpg" />

          <Icons>
            <Status>
              <FaRegComment />
            </Status>

            <Status>
              <button onClick={() => setIsRetweeted((state) => !state)}>
                {isRetweeted ? (
                  <AiOutlineRetweet fill="var(--retweet)" />
                ) : (
                  <AiOutlineRetweet />
                )}
                {isRetweeted ? 1 : ""}
              </button>
            </Status>

            <Status>
              <button onClick={() => setIsLiked((state) => !state)}>
                {isLiked ? <FcLike /> : <AiOutlineHeart />}
                {isLiked ? 1 : ""}
              </button>
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export { Tweet };
