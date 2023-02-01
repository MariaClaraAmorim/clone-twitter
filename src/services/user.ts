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

type UserType = {
  name: string;
  userId: string;
  userName: string;
  photoURL: string;
  bio: string;
  birth: string;
  created_at: string;
};

function isUser(data: unknown): data is UserType {
  if (!data) return false;
  if (typeof data !== "object") return false;
  if ("name" in data) return true;
  return false;
}

export async function createdUser(data: UserType) {
  const usersCol = collection(db, "user");
  const docRef = await addDoc(usersCol, data);
  console.log("User written with ID: ", docRef.id);
}

export async function getUsers() {
  const usersCol = collection(db, "user");
  const userSnapshot = await getDocs(usersCol);
  return extractUsersFromSnapshot(userSnapshot);
}

export async function getUserByUserId(id: string) {
  const usersCol = collection(db, "user");

  const usersQuery = query(usersCol, where("userId", "==", id));

  const userSnapshot = await getDocs(usersQuery);

  return extractUsersFromSnapshot(userSnapshot);
}

function extractUsersFromSnapshot(snapshot: QuerySnapshot<DocumentData>) {
  const users = snapshot.docs.map((doc) => {
    const data = doc.data();

    if (!isUser(data)) return null;

    return data;
  });

  const filteredUsers: UserType[] = [];

  users.forEach((user) => {
    if (user) {
      filteredUsers.push(user);
    }
  });

  return filteredUsers;
}
