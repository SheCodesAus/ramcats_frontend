// NavBar.jsx
import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import './NavBar.css';


function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header>
        <nav>
          <div className="logo-container">
            <Link to="/">
              <img 
                className="logo-nav"
                src="src/assets/logo_typography.png"
                alt="FurFuture Funding Logo" 
              />
            </Link> 
          </div>
          
          <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <div className={`nav-links ${isOpen ? 'active' : ''}`}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Login">Login</Link></li>
              <li><Link to="/About">About</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default NavBar;