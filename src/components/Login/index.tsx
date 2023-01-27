import { useUserContext } from "../../contexts/UserContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useCallback, useEffect, useState } from "react";
import { BsTwitter } from "react-icons/bs";
import { Link, redirect, useNavigate } from "react-router-dom";
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
  const { signIn, user } = useUserContext();

  return (
    <>
      <Container>
        <Content>
          <MenuButton>
            <BsTwitter />
          </MenuButton>

          <Label>Entrar no Twitter</Label>
          <Button onClick={signIn}>Fazer login com o google</Button>

          <LabelSignup>
            Não tem uma conta?
            <Strong>
              <Link to="/signup">&nbsp;Registre-se</Link>
            </Strong>
          </LabelSignup>
        </Content>
      </Container>

      <div>
        <h1>{user?.name}</h1>
        <h2>{user?.userName}</h2>
        <img src={user?.photoURL} alt="profile" />
      </div>
    </>
  );
}

export { LoginGoogle };
