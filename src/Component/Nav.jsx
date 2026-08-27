import React from "react";
import "./Nav.css";
import logoIcon from "../assets/Screenshot_2026-08-20_010837-removebg-preview.png";

const Nav = () => {
  return (
    <div className="hero-section__logo">
      <img src={logoIcon} alt="" className="hero-section__logo-icon" />
    </div>
  );
};

export default Nav;
