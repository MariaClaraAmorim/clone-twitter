import React from "react";
import LayoutHome from "./components/Layout/LayoutHome";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import LayoutLogin from "./components/Layout/LayoutLogin";

function App() {
  return (
    <>
      <GlobalStyles />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutLogin />} />

          <Route path="/home" element={<LayoutHome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
