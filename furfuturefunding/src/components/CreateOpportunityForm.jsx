import { useState } from "react";
import { useNavigate } from "react-router-dom";
// // import { useAuth } from "../hooks/use-auth";

function CreateOpportunityForm() {
  const navigate = useNavigate();
  return (
    <form>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" placeholder="Enter scholarship title:" />
      </div>
      <div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="description"
            id="description"
            placeholder="Scholarship Description"
          />
          <div>
            <label htmlFor="opportunity_url">Logo:</label>
            <input
              type="url"
              id="opportunity_url"
              placeholder="Enter logo URL"
            />
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" placeholder="Amount" />
      </div>
      <div>
        <label htmlFor="is-open">Is this scholarship open?</label>
        <input type="checkbox" id="is-open" placeholder="Is Open" />
      </div>
      <button type="submit">Create</button>
    </form>
  );
}

export default CreateOpportunityForm;
