// HeroSection.jsx
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="container">
      <div className="headline">
        <h1>Connecting You with Scholarships That Matter.</h1>
      </div>
      <div className="logo-section">
        <div className="logo-container">
          <img 
            src="/src/assets/furfuturefunding_logo.png"
            alt="FurFuture Funding Logo" 
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;