// AboutUs.jsx
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
 const team = [
   {
     name: "Amber Nguyen",
     position: "Backend Boss",
     bio: "20+ years experience in tech leadershipAspiring product manager and novice powerlifter, who invented 'musical Friday' as an excuse to listen to Broadway musicals at work.",
     image: "/src/assets/Amber.jpg"
   },
   {
     name: "Brooke Pierson", 
     position: "Git Gladiator",
     bio: "Software developer in training who enjoys long walks on the beach, beautiful sunsets, and yodelling to Celine Dion in her down time.",
     image: "src/assets/Brooke.jpg"
   },
   {
     name: "Catherine Blentweyne",
     position: "Project Manager Whiz",
     bio: "Aspiring product manager and novice powerlifter, who invented 'musical Friday' as an excuse to listen to Broadway musicals at work.",
     image: "src/assets/Catherine.jpg" 
   },
   {
     name: "Christin Estrella",
     position: "Frontend Guru",
     bio: "Aspiring product manager and novice powerlifter, who invented 'musical Friday' as an excuse to listen to Broadway musicals at work.",
     image: "src/assets/Christin.jpg"
   },
   {
     name: "Rishika Arora",
     position: "Backend Pro",
     bio: "sdfsdxcgAspiring product manager and novice powerlifter, who invented 'musical Friday' as an excuse to listen to Broadway musicals at work.",
     image: "src/assets/Rishika.jpg"
   }
 ];

 return (
   <div className="about-section">
     <h1>Meet Our Team</h1>
     <p>Hack lick human with sandpaper tongue or lick plastic bags, i bet my nine lives on you-oooo-ooo-hooo for have my breakfast spaghetti yarn so cough furball and leave hair on owner's clothes. Scratch leg; meow for can opener to feed me allways wanting food yet while happily ignoring when being called </p>
     <div className="swirl-background"></div>

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