import React from 'react';
import '../css/navbar.css';
import logo from '../assets/images/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
        <div className='logo-container'>
            <div className="navbar-logo">
                <img src={logo} alt="CEDARS Logo" />
            </div>
        </div>
      <div style={{"display": "flex"}}>
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#services">Services</a></li>
      </ul>
      <button className="quote-button">Get a Quote</button>
      </div>
      
    </nav>
  );
}

export default Navbar;
