import "./OrganisationCard.css";
import { oneOpportunity } from "../data";

function OrganisationCard() {
  return (
    <div className="organisation-card">
      <div class="org_logo"> {oneOpportunity.organisation.image}</div>
      <div class="org_url"> {oneOpportunity.organisation.website}</div>
      <div class="org_description">
        {oneOpportunity.organisation.description}
      </div>
    </div>
  );
}

export default OrganisationCard;
