import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Layout/home";
import { Message } from "./components/Message";

import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />

      {/* <Layout /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/message" element={<Message />} />
          <Route path="/perfil" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
