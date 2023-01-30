import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

type Tweet = {
  text: string;
};

function isTweet(data: unknown): data is Tweet {
  if (!data) return false;
  if (typeof data !== "object") return false;
  if ("text" in data) return true;
  return false;
}

export async function sendTweet(data: Tweet) {
  const tweetsCol = collection(db, "tweets");
  const docRef = await addDoc(tweetsCol, data);
  console.log("Tweet written with ID: ", docRef.id);
}

export async function getTweets() {
  const tweetsCol = collection(db, "tweets");
  const tweetSnapshot = await getDocs(tweetsCol);

  const tweets = tweetSnapshot.docs.map((doc) => {
    const data = doc.data();

    if (!isTweet(data)) return null;

    return data;
  });

  const filteredTweets: Tweet[] = [];

  tweets.forEach((tweet) => {
    if (tweet) {
      filteredTweets.push(tweet);
    }
  });

  return filteredTweets;
}
