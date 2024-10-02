import React from "react";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";

const Home = () => {
  return (
    <div id="home" className="bg-[#2a3528]">
      <Navbar />
      <Profile />
    </div>
  );
};

export default Home;
