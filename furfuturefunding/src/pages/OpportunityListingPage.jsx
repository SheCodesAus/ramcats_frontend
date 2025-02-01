import React from 'react';
import { useParams } from "react-router-dom";
import useOpportunity from "../hooks/use-opportunity";
import { Link } from "react-router-dom";
// import { useAuth } from "../hooks/use-auth";
import OrganisationCard from "../components/OrganisationCard";
import archiveOpportunity from "../api/put-opportunity-archive";
import { useEffect, useState } from "react";

function OpportunityListingPage() {
  const { id } = useParams();
  const opportunityId = id;
  const { opportunity, isLoading, error } = useOpportunity(opportunityId);
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

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <h2>{opportunity.title}</h2>
        <h3>About the opportunity:</h3>
        <p>{opportunity.description}</p>
        <h4>Applications open:</h4>
        <p>{formatDate(opportunity.open_date)}</p>
        <h4>Applications close:</h4>
        <p>{formatDate(opportunity.close_date)}</p>
        <h4>Important information:</h4>
        <p>{`Scholarship type: ${opportunity.type.map(
          (typesData) => typesData.description
        )}`}</p>
        <p>{`Field of study: ${opportunity.discipline.map(
          (disciplineData) => disciplineData.description
        )}`}</p>
        <p>{`Study mode: ${opportunity.attendance_mode}`}</p>
        <p>{`Location: ${opportunity.location}`}</p>
      </div>
      <div>
        <OrganisationCard organisation={opportunity.organisation} />
      </div>
      <button className="apply_button">Apply Now</button>
      <div>
        {userId === loggedinUserId ? (
          <span>
            {
              <Link to={`/opportunities/edit/${opportunityId}`}>
                Edit project detail
              </Link>
            }
          </span>
        ) : null}
        {userId === loggedinUserId ? (
          <button onClick={handleArchive}>
            {archive ? "Unarchive" : "Archive"}
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default OpportunityListingPage;