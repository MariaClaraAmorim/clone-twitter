import React from "react";

import { Container } from "./styles";

import { Loading } from "../isLoading";
import { useState } from "react";
import { useEffect } from "react";
import { LoginGoogle } from "../Login";

function LoadingBackdrop() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  if (isLoading) {
    return (
      <Container>
        <Loading />
      </Container>
    );
  }

  return null;
}

function LayoutLogin() {
  return (
    <Container>
      <LoadingBackdrop/>
      <LoginGoogle />
    </Container>
  );
}

export { LayoutLogin };
