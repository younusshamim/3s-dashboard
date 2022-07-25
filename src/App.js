import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TestPage from "./pages/TestPage";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
