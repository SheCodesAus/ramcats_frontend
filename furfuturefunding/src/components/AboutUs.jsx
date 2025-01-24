// AboutUs.jsx
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
 const team = [
   {
     name: "Amber Nguyen",
     position: "Backend Boss",
     bio: "20+ years experience in tech leadership",
     image: "/src/assets/Amber.jpg"
   },
   {
     name: "Brooke Pierson", 
     position: "Git Gladiator",
     bio: "Cloud architecture specialist & system design expert",
     image: "src/assets/Brooke.jpg"
   },
   {
     name: "Catherine",
     position: "Project Management Prodigy",
     bio: "Award-winning UX designer focused on accessibility",
     image: "src/assets/Catherine.jpg" 
   },
   {
     name: "Christin Estrella",
     position: "Frontend Guru",
     bio: "Full-stack developer with ML expertise",
     image: "src/assets/Christin.jpg"
   },
   {
     name: "Rishika Arora",
     position: "Backend Rockstar",
     bio: "Driving innovation in fintech products",
     image: "src/assets/Catherine.jpg"
   }
 ];

 return (
   <div className="about-section">
     <h1>Meet Our Team</h1>
     <p>Hack lick human with sandpaper tongue or lick plastic bags, i bet my nine lives on you-oooo-ooo-hooo for have my breakfast spaghetti yarn so cough furball and leave hair on owner's clothes. Scratch leg; meow for can opener to feed me allways wanting food yet while happily ignoring when being called, so destroy house in 5 seconds yet trip on catnip yet meowing non stop for food, i hate cucumber pls dont throw it at me. </p>
     <div className="team-grid">
       {team.map((member, i) => (
         <div key={i} className="team-member">
           <div className="member-image">
             <img src={member.image} alt={member.name} />
           </div>
           <div className="member-info">
             <h3>{member.name}</h3>
             <p className="position">{member.position}</p>
             <p className="bio">{member.bio}</p>
           </div>
         </div>
       ))}
     </div>
   </div>
 );
};

export default AboutUs;