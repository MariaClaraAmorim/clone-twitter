import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { BsTwitter } from "react-icons/bs";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../../services/firebase";
import Button from "../Button";

import {
  Container,
  Content,
  Label,
  LabelSignup,
  MenuButton,
  Strong,
} from "./styles";

function LoginGoogle() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [email, setEmail] = useState("");

  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  provider.setCustomParameters({
    login_hint: "user@example.com",
  });

  function makeLogin() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;

        setName(user.displayName || "");
        setProfileImage(user.photoURL || "");
        setEmail(user.email || "");

        console.log(user);
        // ...
      })
      .catch((error) => {
        console.log(error);
        // ...
      });

    redirect("/home");
  }

  return (
    <>
      <Container>
        <Content>
          <MenuButton>
            <BsTwitter />
          </MenuButton>

          <Label>Entrar no Twitter</Label>
          <Button onClick={makeLogin}>Fazer login com o google</Button>

          <LabelSignup>
            Não tem uma conta?
            <Strong>
              <Link to="/signup">&nbsp;Registre-se</Link>
            </Strong>
          </LabelSignup>
        </Content>
      </Container>

      <div>
        <h1> {name}</h1>
        <h2> {email}</h2>
        <img src={profileImage} alt="profile" />
      </div>
    </>
  );
}

export { LoginGoogle };
