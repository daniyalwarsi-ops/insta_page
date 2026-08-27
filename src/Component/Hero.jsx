import React from "react";
import Nav from "./Nav";
import heroImg from "../assets/Screenshot_2026-08-20_013615-removebg-preview.png";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-section">
      <div>
        <Nav />
      </div>

      <div className="hero-section__heading-wrap">
        <h1 className="hero-section__heading">
          See everyday moments from &nbsp;
          <span className="hero-section__heading-gradient">close friends.</span>
        </h1>
      </div>

      <div className="hero-section__card-wrap">
        <div className="hero-section__card-backdrop" />
        <div className="hero-section__card-wrap">
          <img src={heroImg} alt="" className="hero-section__image" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
