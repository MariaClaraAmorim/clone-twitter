import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout";
import Home from "./components/Layout/home";

function App() {
  return (
    <>
      <GlobalStyles />

      {/* <Layout /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Layout />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
