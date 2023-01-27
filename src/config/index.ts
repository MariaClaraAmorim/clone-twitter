import { GoogleAuthProvider } from "firebase/auth";

const googleAuthProvider = new GoogleAuthProvider();

googleAuthProvider.addScope(
  "https://www.googleapis.com/auth/contacts.readonly"
);

googleAuthProvider.setCustomParameters({
  login_hint: "user@example.com",
});

export { googleAuthProvider };
