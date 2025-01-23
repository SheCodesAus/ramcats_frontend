import { oneOpportunity } from "../data";
import { useParams } from "react-router-dom";
import useOpportunities from "../hooks/use-opportunities";
import "./OpportunityListingPage.css";

function OpportunityListingPage() {
  return (
    <div>
      <div class="opportunity-info">
        <h2>{oneOpportunity.title}</h2>
        <h3>{`Description of scholarship: ${oneOpportunity.description}`}</h3>
        <h3>{`Applications Open: ${oneOpportunity.open_date}`}</h3>
        <h5>{`Closing date: ${oneOpportunity.close_date}`}</h5>
        <h5>{oneOpportunity.location}</h5>
        <h5>{oneOpportunity.attendance_mode}</h5>
        <h5>{oneOpportunity.type}</h5>
        <h5>{oneOpportunity.discipline}</h5>
      </div>
      <div class="organisation-card">
        <OrganisationCard />
      </div>
      <button class="apply_button">Apply Now</button>
    </div>
  );
}
export default OpportunityListingPage;
