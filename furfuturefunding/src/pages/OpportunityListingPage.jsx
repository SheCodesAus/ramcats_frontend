import React from 'react';
import { useParams } from "react-router-dom";
import useOpportunity from "../hooks/use-opportunity";
import OpportunityListingInfo from "../components/OpportunityListingInfo";
import OrganisationCard from "../components/OrganisationCard";


function OpportunityListingPage() {
  const { id } = useParams();
  const { opportunity, isLoading, error } = useOpportunity(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="opportunity-listing-container">
      <div className="opportunity-content">
        {opportunity && <OpportunityListingInfo opportunity={opportunity} />}
        {opportunity?.organisation && (
          <OrganisationCard organisation={opportunity.organisation} />
        )}
        <button className="apply_button">Apply Now</button>
      </div>
    </div>
  );
}

export default OpportunityListingPage;