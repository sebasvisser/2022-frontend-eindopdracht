import React from "react";
import "./App.css";
import { Route, Navigate, Routes } from "react-router-dom";
// componenten
import NavBar from "./components/Navbar";
// pagina's
import Home from "./pages/Home";
import Search from "./pages/Search";
import Result from "./pages/Result";
import Donations from "./pages/Donations";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <NavBar />
      <div className="content">
        <Home />
        <Search />
        <Result />
        <Donations />
        <Profile />
      </div>
    </>
  );
}

export default App;
