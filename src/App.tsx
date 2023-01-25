import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { LayoutExplore } from "./components/Layout/explore";
import { Home } from "./components/Layout/home";
import { LayoutLogin } from "./components/Layout/login";
import { LayoutMessage } from "./components/Layout/message";
import { LayoutPerfilUsers } from "./components/Layout/perfilUsers";
import { LayoutSignup } from "./components/Layout/signup";
import Signin from "./components/Login";
import { AuthProvider } from "./contexts/auth";
import useAuth from "./hooks/useAuth";

import GlobalStyles from "./styles/GlobalStyles";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};

function App() {
  return (
    <>
      <GlobalStyles />

      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayoutLogin />} />
            <Route path="/signup" element={<LayoutSignup />} />
            <Route path="/home" element={<Private Item={Home} />} />
            <Route path="/message" element={<LayoutMessage />} />
            <Route path="/explore" element={<LayoutExplore />} />
            <Route path="/perfil" element={<Layout />} />
            <Route
              path="/perfilusuario/:userId"
              element={<LayoutPerfilUsers />}
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
