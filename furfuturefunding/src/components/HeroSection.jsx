import React from 'react';
import SearchBar from './SearchBar'; 
import './HeroSection.css'; 

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Connecting You with Scholarships That Matter.</h1>
        <SearchBar />
      </div>
      <div className="hero-image">
        <img src="assets/furfuturefunding_logo.png" alt="FurFuture Funding Logo" />
      </div>
    </div>
  );
}

export default HeroSection;