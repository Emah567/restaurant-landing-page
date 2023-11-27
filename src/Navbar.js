import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import './media.css'

const Navbar = () => {
  const [navbarActive, setNavbarActive] = useState(false);

  const toggleNavbar = () => {
    setNavbarActive(!navbarActive);
  };

  return (
    <nav className={`navbar ${navbarActive ? 'active' : ''}`}>
     
      <div className="navbar-logo">
     <div className='left-side'>
       <div className='icon'></div>
       <p>Wizzy Delight</p>
     </div>
        <div className="navbar-toggler" onClick={toggleNavbar}>
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="-5 -7 24 24"><path fill="white" d="M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zM1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z"/></svg>
      </div>
        </div>
      
      <ul className="navbar-links">
        <li className="navbar-link">
          <a href="/">Home</a>
        </li>
        <li className="navbar-link">
          <a href="/menu">Menu</a>
        </li>
        <li className="navbar-link">
          <a href="/contact">Contact</a>
        </li>
        <li className="navbar-link">
          <a href="/about" className='about'>About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
