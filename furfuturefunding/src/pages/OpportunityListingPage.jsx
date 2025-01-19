import { oneOpportunity } from "../data";
import { useParams } from "react-router-dom";
import useOpportunities from "../hooks/use-opportunities";
import "./OpportunityListingPage.css";

function OpportunityListingPage() {
  return (
    <div>
      <div class="organisation-info">
        <h1>{oneOpportunity.organisation.name}</h1>
        <h2>{oneOpportunity.organisation.website}</h2>
        <h3>{oneOpportunity.organisation.description}</h3>
        <img src={oneOpportunity.organisation.image} alt="logo" />
      </div>
      <div class="opportunity-info">
        <h2>{oneOpportunity.title}</h2>
        <h3>Created at: {oneOpportunity.date_created}</h3>
        <h5>{`Closing date: ${oneOpportunity.close_date}`}</h5>
        <h3>{`Status: ${oneOpportunity.is_open}`}</h3>
        <h4>{`Description of scholarship: ${oneOpportunity.description}`}</h4>
        <h5>{`Attendance mode: ${oneOpportunity.attendance_mode}`}</h5>
        <h5>{`Location of scholarship: ${oneOpportunity.location}`}</h5>
      </div>
    </div>
  );
}
export default OpportunityListingPage;
