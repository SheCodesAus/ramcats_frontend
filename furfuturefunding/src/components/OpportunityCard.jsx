import React from 'react';
import './OpportunityCard.css';

const OpportunityCard = ({ opportunity }) => {
  return (
    <div className="opportunity-card">
      <div className="header-section">
        <div className="image-container">
          <img src={opportunity.image} alt={opportunity.title} className="card-image" />
        </div>
        <h2>{opportunity.title}</h2>
      </div>

      <div className="card-content">
        <div className="info-row description">
          <span className="material-icons">business</span>
          <span>{opportunity.description}</span>
        </div>

        <div className="details">
          <div className="info-row">
            <span className="material-icons">calendar_today</span>
            <span>Opens: {new Date(opportunity.open_date).toLocaleDateString()}</span>
          </div>

          <div className="info-row">
            <span className="material-icons">calendar_today</span>
            <span>Closes: {new Date(opportunity.close_date).toLocaleDateString()}</span>
          </div>

          <div className="info-row">
            <span className="material-icons">location_on</span>
            <span>{opportunity.location}</span>
          </div>

          <div className="info-row">
            <span className="material-icons">school</span>
            <span>{opportunity.attendance_mode}</span>
          </div>
        </div>

        <div className="tags">
          {opportunity.eligibility?.map((eligibilityData) => (
            eligibilityData && (
              <span key={eligibilityData.id} className="tag eligibility-tag">
                {eligibilityData.description}
              </span>
            )
          ))}
          {opportunity.discipline?.map((disciplineData) => (
            disciplineData && (
              <span key={disciplineData.id} className="tag discipline-tag">
                {disciplineData.description}
              </span>
            )
          ))}
        </div>

        <button className="apply-button">Find out more</button>
      </div>
    </div>
  );
};

export default OpportunityCard;