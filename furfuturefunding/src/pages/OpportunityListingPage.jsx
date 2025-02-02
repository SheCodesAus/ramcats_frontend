import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import useOpportunity from "../hooks/use-opportunity";
import OrganisationCard from "../components/OrganisationCard";
import archiveOpportunity from "../api/put-opportunity-archive";
import OpportunityListingInfo from "../components/OpportunityListingInfo";
import Footer from '../components/Footer';
import { useNavigate } from "react-router-dom";
import '../components/OpportunityListingPage.css';

function OpportunityListingPage() {
  const { id } = useParams();
  const opportunityId = id;
  const navigate = useNavigate();
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

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img
          src="https://cdn.dribbble.com/users/160117/screenshots/3197970/main.gif"
          alt="Loading..."
          style={{
            border: "3px solid navy",
            borderRadius: "10px",
            width: "300px",
          }}
        />
      </div>
    );
  }
  if (error) {
    return navigate("*");
  }

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
    <div className="page-container">
      <main className="main-content">
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
      </main>
      <Footer />
    </div>
  );
}

function OpportunityActions({
  userId,
  loggedinUserId,
  id,
  archive,
  handleArchive,
}) {
  return (
    <div>
      {userId === loggedinUserId && (
        <div>
          <Link to={`/opportunities/edit/${id}`}>Edit project detail</Link>
          <button onClick={handleArchive}>
            {archive ? "Unarchive" : "Archive"}
          </button>
        </div>
      )}
    </div>
  );
}

export default OpportunityListingPage;
