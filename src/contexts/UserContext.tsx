import { googleAuthProvider } from "@config/index";
import { auth } from "@services/firebase";
import { signInWithPopup } from "firebase/auth";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

export interface TypeUser {
  id: string;
  name: string;
  userName: string;
  photoURL: string;
  isLoggedIn: boolean;
}

type UserProviderProps = {
  children: ReactNode;
};

type UserContextType = {
  user: TypeUser | undefined;
  signIn: () => void;
  signOut: () => void;
};

const UserContext = createContext<UserContextType>({
  user: undefined,
  signIn: () => {
    throw new Error("SignIn not implemented");
  },
  signOut: () => {
    throw new Error("SignOut not implemented");
  },
});

function isValidUser(data: unknown): data is TypeUser {
  if (!data) return false;

  return "name" in data;
}

const AUTH_LS_KEY = "auth";

function UserProvider({ children }: UserProviderProps) {
  const recoveredUser = JSON.parse(localStorage.getItem(AUTH_LS_KEY) ?? "{}");

  const initialState = isValidUser(recoveredUser) ? recoveredUser : undefined;

  const [user, setUser] = useState<TypeUser | undefined>(initialState);

  const navigate = useNavigate();

  const signIn = useCallback(() => {
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        const user = result.user;

        const userName = user.email ? user.email.split("@") : "";
        const newUserName = `@${userName[0]}`;

        const data = {
          id: user.uid,
          name: user.displayName ?? "",
          userName: newUserName,
          photoURL: user.photoURL ?? "",
          isLoggedIn: true,
        };

        setUser(data);

        localStorage.setItem(AUTH_LS_KEY, JSON.stringify(data));

        navigate("/home", { replace: true });
      })
      .catch((error) => {
        if (error instanceof Error) {
          alert(error.message);
        } else {
          alert("Oops! Algo deu errado.");
        }
      });
  }, []);

  const signOut = () => {
    setUser(undefined);
    localStorage.removeItem(AUTH_LS_KEY);

    navigate("/", { replace: true });
  };

  return (
    <UserContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </UserContext.Provider>
  );
}

function useUserContext() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUserContext needs to be used inside UserProvider");
  }

  return context;
}

export default UserProvider;
export { useUserContext };
