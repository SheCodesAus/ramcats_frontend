// import { oneOpportunity } from "../data";
import { useParams } from "react-router-dom";
import useOpportunity from "../hooks/use-opportunity";
// import { useAuth } from "../hooks/use-auth";
import OrganisationCard from "../components/OrganisationCard";



function OpportunityListingPage() {
  // const {auth, setAuth} = useAuth;
  const { id } = useParams();
  const opportunityId = id;
  const  { opportunity, isLoading, error } = useOpportunity(opportunityId);
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  }


  if (isLoading) {
    return (<p>loading...</p>)
  }

  if (error) {
    return (<p>{error.message}</p>)
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
        <p>{`Scholarship type: ${opportunity.type}`}</p>
        <p>{`Field of study: ${opportunity.discipline}`}</p>
        <p>{`Study mode: ${opportunity.attendance_mode}`}</p>
        <p>{`Location: ${opportunity.location}`}</p>
      </div>
      <div>
        <OrganisationCard organisation={opportunity.organisation}/>



      </div>
      <button className="apply_button">Apply Now</button>
    </div>
  );
}
export default OpportunityListingPage;
