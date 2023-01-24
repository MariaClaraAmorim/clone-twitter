import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { LayoutExplore } from "./components/Layout/explore";
import { Home } from "./components/Layout/home";
import { LayoutMessage } from "./components/Layout/message";

import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/message" element={<LayoutMessage />} />
          <Route path="/explore" element={<LayoutExplore />} />
          <Route path="/perfil" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
