// HeroSection.jsx
import React from 'react';
import './HeroSection.css';
import furfuturefunding_logo from "../img/furfuturefunding_logo.png";

const HeroSection = () => {
  return (
    <div className="container">
      <div className="headline">
        <h1>Connecting You with Scholarships That Matter.</h1>
      </div>
      <div className="logo-section">
        <div className="logo-container">
          <img 
            src={furfuturefunding_logo}
            alt="FurFuture Funding Logo" 
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;