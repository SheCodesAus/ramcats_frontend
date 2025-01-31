import React from "react";
import "./OpportunityCard.css";
import { Link } from "react-router-dom";

const OpportunityCard = ({ opportunity }) => {
  const opportunityLink = `/opportunities/${opportunity.id}/`; // Django expects the trailing slash

  return (
    <div className="opportunity-card">
      <div className="header-section">
        <div className="image-container">
          <img src={opportunity.image} alt={opportunity.title} className="card-image" />
        </div>
        <h2>{opportunity.title}</h2>
      </div>

      <div className="card-content">
        <div className="info-row">
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
          {opportunity.eligibility.map((eligibilityData) => (
            <span key={eligibilityData.id} className="tag">{eligibilityData.description}</span>
          ))}
          {opportunity.discipline.map((disciplineData) => (
            <span key={disciplineData.id} className="tag">{disciplineData.description}</span>
          ))}
          {opportunity.type.map((typeData) => (
            <span key={typeData.id} className="tag">{typeData.description}</span>
          ))}
        </div>

        {/* Corrected Button to Redirect to Django API Path */}
        <Link to={opportunityLink}>
          <button className="apply-button">Find out more</button>
        </Link>
      </div>
    </div>
  );
};

export default OpportunityCard;
