// Footer.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa';
import backgroundImage from '../img/ramcats_1.png';

const Footer = () => {
  // Get the current location using useLocation hook
  const location = useLocation();
  
  // Function to determine the page type
  const getPageType = () => {
    const path = location.pathname.toLowerCase();
    if (path.includes('opportunitylistingpage')) return 'opportunity-listing-page';
    // if (path.includes('login')) return 'login-page';
    return '';
  };

  const pageClassName = getPageType();

  const footerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <footer className={`custom-footer ${pageClassName}`} style={footerStyle}>
      <div className="custom-container">
        <div className="custom-row">
          <div className="custom-col about-sectionfooter">
            <p className="custom-text">
              FurFuture Funding is committed to helping aspiring professionals secure funding for their career growth. 
              We provide valuable insights, expert resources, and continuous support to connect individuals with the best 
              scholarships, grants, and sponsorships available. Our mission is to empower talented individuals by bridging 
              financial gaps and ensuring access to opportunities that foster learning, career advancement, and long-term success.
            </p>
          </div>

          <div className="custom-col custom-footer-links">
            <h6>Quick Links</h6>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        <hr className="custom-divider" />

        <div className="custom-footer-bottom">
          <p className="custom-copyright">
            Copyright © 2025 FurFuture Funding. All Rights Reserved.
          </p>
          <ul className="custom-social-icons">
            <li><a href="#"><FaFacebookF /></a></li>
            <li><a href="#"><FaTwitter /></a></li>
            <li><a href="#"><FaLinkedin /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
