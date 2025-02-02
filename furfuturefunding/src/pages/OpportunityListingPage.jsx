<<<<<<< HEAD
import { useParams } from "react-router-dom";
=======
import React, { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
>>>>>>> develop
import useOpportunity from "../hooks/use-opportunity";
import OrganisationCard from "../components/OrganisationCard";
import archiveOpportunity from "../api/put-opportunity-archive";
import OpportunityListingInfo from "../components/OpportunityListingInfo";

function OpportunityListingPage() {
  const { id } = useParams();
  const { opportunity, isLoading, error } = useOpportunity(id);
  const userId = parseInt(window.localStorage.getItem("user_id"));
  const [loggedinUserId, setLoggedinUserId] = useState(null);
  const [archive, setArchive] = useState({ is_archive: false });

  useEffect(() => {
    if (opportunity) {
      setArchive(opportunity.is_archive);
      setLoggedinUserId(opportunity.owner);
    }
  }, [opportunity]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message || "An error occurred."}</p>;
  if (!opportunity) return null;

  const handleArchive = async () => {
    const updatedArchive = !archive;
    try {
      await archiveOpportunity(id, updatedArchive);
      setArchive(updatedArchive);
      alert(`Opportunity ${updatedArchive ? "archived" : "unarchived"}`);
    } catch (error) {
      console.error("Error updating archive status:", error);
      alert("Failed to update archive status.");
    }
  };

  return (
    <div>
      <OpportunityListingInfo opportunity={opportunity} />
      <OrganisationCard organisation={opportunity.organisation} />
      <OpportunityActions 
        userId={userId} 
        loggedinUserId={loggedinUserId} 
        id={id} 
        archive={archive} 
        handleArchive={handleArchive} 
      />
    </div>
  );
}

function OpportunityActions({ userId, loggedinUserId, id, archive, handleArchive }) {
  return (
    <div>
      {userId === loggedinUserId && (
        <div>
          <Link to={`/opportunities/edit/${id}`}>Edit project detail</Link>
          <button onClick={handleArchive}>{archive ? "Unarchive" : "Archive"}</button>
        </div>
      )}
    </div>
  );
}

export default OpportunityListingPage;