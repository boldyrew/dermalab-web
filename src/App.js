import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main } from "./Main";

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
