import React from 'react';
import "./OrganisationCard.css";

function OrganisationCard({ organisation }) {
  if (!organisation) return null;

  return (
    <div className="organisation-card">
      <img 
        src={organisation.logo || ''} 
        alt={`${organisation.name || ''} logo`} 
      />
      <h2>{organisation.name || ''}</h2>
      <h3>Description</h3>
      <p>{organisation.description || ''}</p>
      <a 
        href={organisation.website || '#'} 
        target="_blank"
        rel="noopener noreferrer"
      >
        {organisation.website || ''}
      </a>
    </div>
  );
}

export default OrganisationCard;