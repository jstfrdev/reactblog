import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import LoginPage from "./Pages/LoginPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Posts from "./Pages/Posts";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/posts" element={<Posts />} />

          <Route exact path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
