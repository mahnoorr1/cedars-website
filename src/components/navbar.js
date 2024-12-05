import React, { useState } from 'react';
import '../css/navbar.css';
import logo from '../assets/images/logo.png';
import instagram from '../assets/images/instagram.png';
import linkedIn from '../assets/images/linkedIn.png';
import twitter from '../assets/images/twitter.png';

import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

function Navbar() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [isDialogVisible, setDialogVisible] = useState(false);

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

        <button className="quote-button" onClick={() => setDialogVisible(true)} >Get a Quote</button>
        
        <Button className="menu-bar-btn" onClick={() => setSidebarVisible(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2"> <path d="M4 6h16"></path> <path d="M7 12h13"></path> <path d="M10 18h10"></path> </svg> 
        </Button>
      </div>

      <Sidebar className='mobile-sidebar' visible={isSidebarVisible} position="right" onHide={() => setSidebarVisible(false)}>
        <div className="navbar-container">
          <ul className="navbar-links">
            <li onClick={() => setSidebarVisible(false)}><a href="#about">About</a></li>
            <li onClick={() => setSidebarVisible(false)}><a href="#products">Products</a></li>
            <li onClick={() => setSidebarVisible(false)}><a href="#services">Services</a></li>
          </ul>

          <button className="quote-button" onClick={() => setDialogVisible(true)} >Get a Quote</button>
        </div>

        <div className='socials'>
            <img src={linkedIn}></img>
            <img src={instagram}></img>
            <img src={twitter}></img>
        </div>
      </Sidebar>

      {/* Get Quote Modal */}
      <Dialog header="Header" className='get-quote-modal' visible={isDialogVisible} draggable={false} onHide={() => {if (!isDialogVisible) return; setDialogVisible(false); }}>
          <div className='get-quote-form'>
              <h2>Let's Get in Touch</h2>
              <div className='get-quote-form-row'>
                <div className='form-group'>
                  <InputText type='text' placeholder='Name' />
                </div>

                <div className='form-group'>
                  <InputText type='email' placeholder='Email' />
                </div>

                <div className='form-group'>
                  <InputText type='number' placeholder='Mobile' />
                </div>
                
                <div className='form-group'>
                  <InputTextarea rows={5} cols={30} placeholder='Message' />
                </div>
                
                <div className='form-group flex justify-content-center'>
                <Button label="Send" className='send-button' />
                </div>
              </div>
          </div>
      </Dialog>
    </nav>
  );
}

export default Navbar;
