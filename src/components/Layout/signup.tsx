import React from "react";

import { Container } from "./styles";

import Signup from "../Signup";
import { AuthProvider } from "../../contexts/auth";
function LayoutSignup() {
  return (
    <AuthProvider>
      <Container>
        <Signup />
      </Container>
    </AuthProvider>
  );
}

export { LayoutSignup };
