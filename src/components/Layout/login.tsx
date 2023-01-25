import React from "react";

import { Container } from "./styles";

import { Loading } from "../isLoading";
import Login from "../Login";
import { useState } from "react";
import { useEffect } from "react";

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
      <Login />
    </Container>
  );
}

export { LayoutLogin };
