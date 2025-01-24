// AboutUs.jsx
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    const teamMembers = [
        {
          name: 'Lorem Ipsum',
          role: 'Dolor Sit Amet',
          image: '/src/assets/Catherine.jpg', 
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          name: 'Consectetur Elit',
          role: 'Tempor Incididunt',
          image: '/src/assets/Amber.jpg',
          bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          name: 'Sed Eiusmod',
          role: 'Magna Aliqua', 
          image: '/src/assets/Amber.jpg',
          bio: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
          name: 'Commodo Consequat',
          role: 'Ullamco Laboris',
          image: '/src/assets/Amber.jpg',
          bio: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          name: 'Voluptate Velit',
          role: 'Nulla Pariatur',
          image: '/src/assets/Amber.jpg',
          bio: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea.'
        }
       ];

  return (
    <div className="about-us">
      <h1>The Team Behind Pacifico</h1>
      <p className="subtitle">
        There are many variations of passages of Lorem Ipsum available but the
        majority have suffered alteration in some injected humour.
      </p>
      
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <div className="member-image">
              <img src={member.image} alt={member.name} />
            </div>
            <h3>{member.name}</h3>
            <span className="role">{member.role}</span>
            <p className="bio">{member.bio}</p>
            <div className="social-links">
              <a href="#" className="twitter">Twitter</a>
              <a href="#" className="pinterest">Pinterest</a>
              <a href="#" className="facebook">Facebook</a>
              <a href="#" className="dribbble">Dribbble</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;