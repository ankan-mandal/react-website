import React from "react";
import Common from "./Common";
import { NavLink } from "react-router-dom";
import web from "../public/images/undraw_Data_re_80ws.svg";

const Home = () => {
  return (
    <>
      <Common
        name="Grow Your Business With Us"
        imgsrc={web}
        visit="/service"
        btnname="Get Started"
      />
    </>
  );
};

export default Home;
