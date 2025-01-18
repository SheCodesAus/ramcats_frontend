import React from 'react';
import './OpportunityCard.css';

const OpportunityCard = ({ opportunity }) => {
  return (
    <div className="opportunity-card">
      <img src={opportunity.image} alt={opportunity.name} />
      <h3>{opportunity.name}</h3>
      <p>{opportunity.description}</p>
      <p>Cat Type: {opportunity.catType}</p>
      <p>Cat Breed: {opportunity.catBreed}</p>
      <p>Opening Date: {opportunity.dateOpened}</p>
      <p>Closing Date: {opportunity.dateClosing}</p>
      <p>Field of Study: {opportunity.fieldOfStudy}</p>
    </div>
  );
};

export default OpportunityCard;