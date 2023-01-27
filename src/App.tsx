import UserProvider, { useUserContext } from "@contexts/UserContext";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "@components/Layout";
import { LayoutExplore } from "@components/Layout/explore";
import { Home } from "@components/Layout/home";
import { LayoutLogin } from "@components/Layout/login";
import { LayoutMessage } from "@components/Layout/message";
import { LayoutPerfilUsers } from "@components/Layout/perfilUsers";
import { LayoutSignup } from "@components/Layout/signup";
import { LoginGoogle } from "@components/Login";

import GlobalStyles from "@styles/GlobalStyles";

type PrivateProps = { item: React.ReactElement };

export const Private = ({ item }: PrivateProps) => {
  const { user } = useUserContext();

  return user?.isLoggedIn ? item : <LoginGoogle />;
};

function App() {
  return (
    <>
      <GlobalStyles />

      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<LayoutLogin />} />
            <Route path="/signup" element={<LayoutSignup />} />
            <Route path="/home" element={<Private item={<Home />} />} />
            <Route
              path="/message"
              element={<Private item={<LayoutMessage />} />}
            />
            <Route
              path="/explore"
              element={<Private item={<LayoutExplore />} />}
            />
            <Route path="/profile" element={<Private item={<Layout />} />} />
            <Route
              path="/user/:userId"
              element={<LayoutPerfilUsers />}
            />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
