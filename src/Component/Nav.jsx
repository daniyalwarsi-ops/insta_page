import React from 'react'
import "./Nav.css"
import logo from "../assets/Screenshot_2026-08-20_010837-removebg-preview.png"

const Nav = () => {
  return (
    <div className='hero-section__logo'>
      <img className='hero-section__logo-icon' src={logo} alt="logo" />
    </div>
  )
}

export default Nav