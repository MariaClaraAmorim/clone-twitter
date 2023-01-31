import {
  addDoc,
  collection,
  DocumentData,
  getDocs,
  query,
  QuerySnapshot,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

type Tweet = {
  body: string;
  id?: string;
  userId: string;
};

function isTweet(data: unknown): data is Tweet {
  if (!data) return false;
  if (typeof data !== "object") return false;
  if ("body" in data) return true;
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
  return extractTweetsFromSnapshot(tweetSnapshot);
}

export async function getTweetsByUserId(id: string) {
  const tweetsCol = collection(db, "tweets");

  const tweetsQuery = query(tweetsCol, where("userId", "==", id));

  const tweetSnapshot = await getDocs(tweetsQuery);

  return extractTweetsFromSnapshot(tweetSnapshot);
}

function extractTweetsFromSnapshot(snapshot: QuerySnapshot<DocumentData>) {
  const tweets = snapshot.docs.map((doc) => {
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
