import React from "react";
import {Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import TeachersPage from "./pages/TeachersPage";

const App = () => {
  let token = window.localStorage.getItem("token") || false;

  // setIsLoged(!!token);

  return (
    <div style={{ padding: 10 }}>
      <Routes>
        {!!token !== true ? (
          <Route path="/login" element={<LoginPage/>} />
        ) : (
          <>
          <Route path="/" element={<HomePage/>} />
          <Route path="/teachers" element={<TeachersPage/>} />
          </>
        )}
        <Route path="*" element={<LoginPage/>} />
      </Routes>
    </div>
  );
};

export default App;
