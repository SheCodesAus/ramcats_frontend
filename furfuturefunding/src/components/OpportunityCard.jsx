import React from "react";
import "./OpportunityCard.css";

const OpportunityCard = ({ opportunity }) => {
  return (
    <div className="opportunity-card">
      <h3>{opportunity.title}</h3>
      <p>{opportunity.description}</p>
      <p>Amount: ${opportunity.amount}</p>
      <p>Location: {opportunity.location}</p>
      <p>Attendance Mode: {opportunity.attendance_mode}</p>
      <div className="tags">
        {opportunity.eligibility?.map((eligibilityData) => (
          <span key={eligibilityData.id} className="tag eligibility-tag">
            {eligibilityData.description}
          </span>
        ))}
        {opportunity.discipline?.map((disciplineData) => (
          <span key={disciplineData.id} className="tag discipline-tag">
            {disciplineData.description}
          </span>
        ))}
      </div>
    </div>
  );
};

export default OpportunityCard;