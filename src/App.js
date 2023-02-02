import React from "react";
import "./App.css";
import { Route, Navigate, Routes } from "react-router-dom";
// componenten
import NavBar from "./components/navbar/Navbar";
// pagina's
import Home from "./pages/Home";
import Search from "./pages/Search";
import Result from "./pages/Result";
import Donations from "./pages/Donations";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/result" element={<Result />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
