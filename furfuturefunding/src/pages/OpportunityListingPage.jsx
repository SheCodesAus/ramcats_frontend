// import { oneOpportunity } from "../data";
import { useParams } from "react-router-dom";
import useOpportunity from "../hooks/use-opportunity";
import { Link } from "react-router-dom";
// import { useAuth } from "../hooks/use-auth";
import OrganisationCard from "../components/OrganisationCard";
import archiveOpportunity from "../api/put-opportunity-archive";
import { useState } from "react";

function OpportunityListingPage() {
  // const {auth, setAuth} = useAuth;
  const { id } = useParams();
  const opportunityId = id;
  const { opportunity, isLoading, error } = useOpportunity(opportunityId);
  const [archive, setArchive] = useState({
    is_archive: false,
  });

  const handleArchive = () => {
    setArchive((prevState) => {
      const updatedArchive = !prevState.is_archive;
      archiveOpportunity(id, updatedArchive);
      return {
        ...prevState,
        is_archive: updatedArchive,
      };
    });
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

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
        <span>
          {
            <Link to={`/opportunities/edit/${opportunityId}`}>
              Edit project detail
            </Link>
          }
        </span>
        <button onClick={handleArchive}>
          {archive.is_archive ? "Unarchive" : "Archive"}
        </button>
      </div>
    </div>
  );
}
export default OpportunityListingPage;
