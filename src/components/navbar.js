import React, { useState } from 'react';
import '../css/navbar.css';
import logo from '../assets/images/logo.png';
import instagram from '../assets/images/instagram.png';
import linkedIn from '../assets/images/linkedIn.png';
import twitter from '../assets/images/twitter.png';

import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

function Navbar() {
  const [visible, setVisible] = useState(false);

  return (
    <nav className="navbar">
      <div className='logo-container'>
          <div className="navbar-logo">
              <img src={logo} alt="CEDARS Logo" />
          </div>
      </div>

      <div className="navbar-container">
        <ul className="navbar-links">
          <li><a href="#about">About</a></li>
          <li><a href="#products">products</a></li>
          <li><a href="#services">Services</a></li>
        </ul>

        <button className="quote-button">Get a Quote</button>
        
        <Button className="menu-bar-btn" onClick={() => setVisible(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2"> <path d="M4 6h16"></path> <path d="M7 12h13"></path> <path d="M10 18h10"></path> </svg> 
        </Button>
      </div>

      <Sidebar className='mobile-sidebar' visible={visible} position="right" onHide={() => setVisible(false)}>
        <div className="navbar-container">
          <ul className="navbar-links">
            <li><a href="#about">About</a></li>
            <li><a href="#products">products</a></li>
            <li><a href="#services">Services</a></li>
          </ul>

          <button className="quote-button">Get a Quote</button>
        </div>

        <div className='socials'>
            <img src={linkedIn}></img>
            <img src={instagram}></img>
            <img src={twitter}></img>
        </div>
      </Sidebar>
    </nav>
  );
}

export default Navbar;
