import { useState } from "react";
import LocationDropDown from "./LocationDropDown";
// // import { useAuth } from "../hooks/use-auth";

function CreateOpportunityForm() {
  const hardcodeddate = "2025-01-25";
  const hardcodeddate2 = "2025-01-26";
  return (
    <form>
      <div>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          placeholder="Enter scholarship title:"
          value="Learn How To Become a BitCoin Boss Bitch"
        />
      </div>
      <div>
        <label htmlFor="description">Description: </label>
        <input
          type="description"
          id="description"
          placeholder="Scholarship Description"
          value="Bitcoin: You thought it was old news and only for straight white men, but you're wrong."
        />
      </div>
      <div>
        <label htmlFor="opportunity_url">Link to website: </label>
        <input
          type="url"
          id="opportunity_url"
          placeholder="Enter website URL"
          value="https://bitcoinbossbitch.com.au"
        />
      </div>
      <div>
        <label htmlFor="open_date">When does it open? </label>
        <input
          type="date"
          id="open_date"
          placeholder="Opening Date"
          value={hardcodeddate}
        />
      </div>
      <div>
        <label htmlFor="close_date">When is it closing? </label>
        <input
          type="date"
          id="close_date"
          placeholder="Closing Date"
          value={hardcodeddate2}
        />
      </div>
      <div>
        <label htmlFor="location">Location: </label>
        <LocationDropDown />
      </div>
      <div>
        <label htmlFor="amount">Scholarship value: </label>
        <input type="number" id="amount" placeholder="Amount" value={2000} />
      </div>
      <div>
        <label htmlFor="attendance_mode">Attendance mode: </label>
        <input
          type="text"
          id="attendance_mode"
          placeholder="Attendance mode"
          value="Online"
        />
      </div>
      <div>
        <label htmlFor="type">Type: </label>
        <input type="text" id="type" placeholder="Type" value="Short course" />
      </div>
      <div>
        <label htmlFor="discipline">Discipline: </label>
        <input
          type="text"
          id="discipline"
          placeholder="Discipline"
          value="Finance"
        />
      </div>
      <div>
        <label htmlFor="eligibility">Eligibility: </label>
        <input
          type="text"
          id="eligibility"
          placeholder="Eligibility"
          value="Female-identifying persons"
        />
      </div>
      <button type="submit">Create </button>
    </form>
  );
}

export default CreateOpportunityForm;
