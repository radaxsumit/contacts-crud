import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home'; 
import Leaderboard from './pages/Leaderborad';
import Free from './pages/Free';
import Store from './pages/Store';



const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Leaderboard" element={<Leaderboard />} />
        <Route path="/Free" element={<Free />} />
        <Route path="/Store" element={<Store />} />
      </Routes>


    </div>
  );
};

export default App;
