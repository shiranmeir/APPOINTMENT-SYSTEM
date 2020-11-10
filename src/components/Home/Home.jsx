import React from "react";
import Navbar from "../Navbar/Navbar";
import Doctor from "../Doctor/Doctor";
import Patient from "../Patient/Patient";

import "./Home.scss";
import "antd/dist/antd.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Doctor />
      <Patient />
    </div>
  );
};

export default Home;
