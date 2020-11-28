import React from "react";
import Common from "./Common";
import { NavLink } from "react-router-dom";
import web from "../public/images/undraw_Segmentation_re_gduq.svg";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page!"
        imgsrc={web}
        visit="/contact"
        btnname="Contact Now"
      />
    </>
  );
};

export default About;
