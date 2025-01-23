import { useState } from "react";
import LocationDropDown from "./LocationDropDown";
// // import { useAuth } from "../hooks/use-auth";

function CreateOpportunityForm() {
  return (
    <form>
      <div>
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" placeholder="Enter scholarship title:" />
      </div>
      <div>
        <label htmlFor="description">Description: </label>
        <input
          type="description"
          id="description"
          placeholder="Scholarship Description"
        />
      </div>
      <div>
        <label htmlFor="opportunity_url">Link to website: </label>
        <input
          type="url"
          id="opportunity_url"
          placeholder="Enter website URL"
        />
      </div>
      <div>
        <label htmlFor="open_date">When does it open? </label>
        <input type="date" id="open_date" placeholder="Opening Date" />
      </div>
      <div>
        <label htmlFor="close_date">When is it closing? </label>
        <input type="date" id="close_date" placeholder="Closing Date" />
      </div>
      <div>
        <label htmlFor="location">Location: </label>
        <LocationDropDown />
      </div>
      <div>
        <label htmlFor="amount">Amount: </label>
        <input type="number" id="amount" placeholder="Amount" />
      </div>
      <button type="submit">Create </button>
    </form>
  );
}

export default CreateOpportunityForm;
