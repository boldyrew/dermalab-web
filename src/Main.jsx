import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Analysis } from "./components/Analysis/Analysis";
import { SignIn } from "./components/SignIn/SignIn";
import { useLocation } from "react-router-dom";
import { Home } from "./components/Home/Home";

export function Main() {
  const userInfoStr = localStorage.getItem("user");
  const userInfo = userInfoStr ? JSON.parse(userInfoStr) : null;

  let location = useLocation();

  React.useEffect(() => {
    console.log("lova ch", location, userInfo);
  }, [location]);

  return (
    <div id="wrapper">
        <Header userInfo={userInfo} location={location} />
        <main className="content" id="main">
          <Routes>
            <Route path="/analysis" element={<Analysis />}></Route>
            <Route path="/login" element={<SignIn />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </main>
      </div>
  )
}