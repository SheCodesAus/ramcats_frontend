import React from 'react';
import "./OpportunityListingInfo.css";

function OpportunityListingInfo({ opportunity }) {
  if (!opportunity) return null;

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="opportunity-container">
      <h2 className="opportunity-title">{opportunity.title || ''}</h2>
      
      <h3 className="opportunity-subtitle">About the opportunity</h3>
      <p className="opportunity-description">{opportunity.description || ''}</p>
      
      <h4 className="opportunity-heading">Applications open:</h4>
      <p className="opportunity-date">{opportunity.open_date ? formatDate(opportunity.open_date) : ''}</p>
      
      <h4 className="opportunity-heading">Applications close:</h4>
      <p className="opportunity-date">{opportunity.close_date ? formatDate(opportunity.close_date) : ''}</p>
      
      <h4 className="opportunity-heading">Important information:</h4>
      <p className="opportunity-info">{`Scholarship type: ${opportunity.type || ''}`}</p>
      <p className="opportunity-info">{`Field of study: ${opportunity.discipline || ''}`}</p>
      <p className="opportunity-info">{`Study mode: ${opportunity.attendance_mode || ''}`}</p>
      <p className="opportunity-info">{`Location: ${opportunity.location || ''}`}</p>
    <div className="opportunity-actions">
      <button className="apply-button">Apply Now</button>
    </div>
  </div>
  );
}

export default OpportunityListingInfo;