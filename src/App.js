import React from "react";
import "./App.css";
import { Route, Navigate, Routes } from "react-router-dom";
// componenten
import NavBar from "./components/Navbar/Navbar";
// pagina's
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Result from "./pages/result/Result";
import Donations from "./pages/donations/Donations";
import Profile from "./pages/profile/Profile";
import NotFound from "./pages/404/NotFound";

function App() {
  return (
    <>
      {/*// Maken context hier zodat profielpagina achter inlog zit*/}
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
