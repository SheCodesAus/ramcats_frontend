import React from 'react';

function OpportunityListingInfo({ opportunity }) {
  if (!opportunity) return null;

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div>
      <h2>{opportunity.title || ''}</h2>
      <h3>About the opportunity:</h3>
      <p>{opportunity.description || ''}</p>
      
      <h4>Applications open:</h4>
      <p>{opportunity.open_date ? formatDate(opportunity.open_date) : ''}</p>
      
      <h4>Applications close:</h4>
      <p>{opportunity.close_date ? formatDate(opportunity.close_date) : ''}</p>
      
      <h4>Important information:</h4>
      <p>{`Scholarship type: ${opportunity.type || ''}`}</p>
      <p>{`Field of study: ${opportunity.discipline || ''}`}</p>
      <p>{`Study mode: ${opportunity.attendance_mode || ''}`}</p>
      <p>{`Location: ${opportunity.location || ''}`}</p>
    </div>
  );
}

export default OpportunityListingInfo;