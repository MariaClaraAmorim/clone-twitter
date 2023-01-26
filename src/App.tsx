import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "styled-icons/material-outlined";
import { Layout } from "./components/Layout";
import { LayoutExplore } from "./components/Layout/explore";
import { Home } from "./components/Layout/home";
import { LayoutLogin } from "./components/Layout/login";
import { LayoutMessage } from "./components/Layout/message";
import { LayoutPerfilUsers } from "./components/Layout/perfilUsers";
import { LayoutSignup } from "./components/Layout/signup";
import { LoginGoogle } from "./components/Login";

import GlobalStyles from "./styles/GlobalStyles";

const Private = ({ Item }) => {
  return <LoginGoogle />;
};

function App() {
  return (
    <>
      <GlobalStyles />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutLogin />} />
          <Route path="/signup" element={<LayoutSignup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/message" element={<LayoutMessage />} />
          <Route path="/explore" element={<LayoutExplore />} />
          <Route path="/perfil" element={<Layout />} />
          <Route
            path="/perfilusuario/:userId"
            element={<LayoutPerfilUsers />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
