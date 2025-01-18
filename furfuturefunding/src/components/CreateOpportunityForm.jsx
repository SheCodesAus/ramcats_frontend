/* Whatever information is input here needs to render on OpportunityListingPage.jsx */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../hooks/use-auth";

function CreateOpportunityForm() {
  return (
    <form>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" placeholder="Enter scholarship title:" />
      </div>
      <div>
        <div>
          <label htmlFor="logo">Logo:</label>
          <input type="url" id="logo" placeholder="Enter logo URL" />
        </div>
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="description"
          id="description"
          placeholder="Scholarship Description"
        />
      </div>
      <div>
        <label htmlFor="opportunity-type">Opportunity Type:</label>
        <input
          type="opportunity-type"
          id="opportunity-type"
          placeholder="Opportunity Type"
        />
      </div>
      <div>
        <label htmlFor="opportunity-date-open">Date Open:</label>
        <input
          type="datetime"
          id="opportunity-date-open"
          placeholder="Date Open"
        />
      </div>
      <button type="submit">Create</button>
    </form>
  );
}

export default CreateOpportunityForm;
