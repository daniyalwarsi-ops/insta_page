import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import './App.css';

function App() {
  return (
    <div className="app">

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
       <p className="disclaimer">
        This is an unofficial clone built for educational/practice purposes only.
        Not affiliated with, endorsed by, or connected to Instagram or Meta Platforms, Inc.
      </p>
    </div>
  );
}

export default App;