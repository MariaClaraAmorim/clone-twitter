import {
  addDoc,
  collection,
  DocumentData,
  getDocs,
  orderBy,
  query,
  QuerySnapshot,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

type Tweet = {
  body: string;
  id?: string;
  userId: string;
  created_at: string;
};

function isTweet(data: unknown): data is Tweet {
  if (!data) return false;
  if (typeof data !== "object") return false;
  if ("body" in data) return true;
  return false;
}

export async function sendTweet(data: Omit<Tweet, "created_at">) {
  const tweetsCol = collection(db, "tweets");
  
  const tweet: Tweet = {
    ...data,
    created_at: new Date().toISOString()
  }

  const docRef = await addDoc(tweetsCol, tweet);
  console.log("Tweet written with ID: ", docRef.id);
}

export async function getTweets() {
  const tweetsCol = collection(db, "tweets");
  const tweetSnapshot = await getDocs(tweetsCol);
  return extractTweetsFromSnapshot(tweetSnapshot);
}

export async function getTweetsByUserId(id: string) {
  const tweetsCol = collection(db, "tweets");

  const tweetsQuery = query(
    tweetsCol,
    where("userId", "==", id)
    // orderBy("created_at", "desc")
  );

  const tweetSnapshot = await getDocs(tweetsQuery);

  const tweets =  extractTweetsFromSnapshot(tweetSnapshot);

  return tweets.sort((a, b) => {
    const aCreatedAt = new Date(a.created_at).getTime()
    const bCreatedAt = new Date(b.created_at).getTime()
  
    if (aCreatedAt - bCreatedAt) return 1;
    if (aCreatedAt === bCreatedAt) return 0;
    return -1;
  })
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
