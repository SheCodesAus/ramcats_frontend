import React from "react";
import { useEffect, useState } from "react";
import putOpportunity from "../api/put-opportunity";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import getOpportunity from "../api/get-opportunity";

export default function EditOpportunityForm(opportunityId) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [opportunityDetails, setOpportunityDetails] = useState({
    title: "",
    description: "",
    opportunity_url: "",
    amount: "",
    open_date: "",
    close_date: "",
    attendance_mode: "",
    location: "",
    eligibility: [],
    discipline: [],
    type: [],
  });

  useEffect(() => {
    getOpportunity(id)
      .then((opportunity) =>
        setOpportunityDetails({
          ...opportunityDetails,
          title: opportunity.title,
          description: opportunity.description,
          opportunity_url: opportunity.opportunity_url,
          amount: opportunity.amount,
          is_open: opportunity.is_open,
          open_date: opportunity.open_date,
          close_date: opportunity.close_date,
          is_archive: opportunity.is_archive,
          attendance_mode: opportunity.attendance_mode,
          location: opportunity.location,
          eligibility: opportunity.eligibility,
          discipline: opportunity.discipline,
          type: opportunity.type,
        })
      )
      .catch((error) => console.log(error));
  }, [id]);

  const handleCancle = (event) => {
    event.preventDefault();
    navigate("/dashboard");
  };
  const handleChange = (event) => {
    const { id, value } = event.target;
    // console.log(event.target.value);
    setOpportunityDetails((prevOpportunityDetails) => ({
      ...prevOpportunityDetails,
      [id]: value,
    }));
    console.log(opportunityDetails);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting opportunity:", opportunityDetails);
    if (
      opportunityDetails.title &&
      opportunityDetails.description &&
      opportunityDetails.opportunity_url &&
      opportunityDetails.amount &&
      opportunityDetails.is_open &&
      opportunityDetails.open_date &&
      opportunityDetails.close_date &&
      opportunityDetails.is_archive &&
      opportunityDetails.location &&
      opportunityDetails.attendance_mode &&
      opportunityDetails.type &&
      opportunityDetails.discipline &&
      opportunityDetails.eligibility
    ) {
      putOpportunity(
        id,
        opportunityDetails.title &&
          opportunityDetails.description &&
          opportunityDetails.opportunity_url &&
          opportunityDetails.amount &&
          opportunityDetails.is_open &&
          opportunityDetails.open_date &&
          opportunityDetails.close_date &&
          opportunityDetails.is_archive &&
          opportunityDetails.location &&
          opportunityDetails.attendance_mode
        // opportunityDetails.type &&
        // opportunityDetails.discipline &&
        // opportunityDetails.eligibility
      ).then(() => {
        navigate("/");
        console.log("Form Data Submitted:", opportunityDetails);
      });
    }
  };

  return (
    <form className="create-opportunity">
      <div>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          placeholder="Enter scholarship title:"
          value={opportunityDetails.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          id="description"
          placeholder="Scholarship Description"
          value={opportunityDetails.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="opportunity_url">Link to website: </label>
        <input
          type="url"
          id="opportunity_url"
          placeholder="Enter website URL"
          value={opportunityDetails.opportunity_url}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="open_date">When does it open? </label>
        <input
          type="datetime-local"
          id="open_date"
          placeholder="Opening Date"
          value={opportunityDetails.open_date}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="close_date">When is it closing? </label>
        <input
          type="datetime-local"
          id="close_date"
          placeholder="Closing Date"
          value={opportunityDetails.close_date}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="location">Location: </label>
        <select
          onChange={handleChange}
          id="location"
          value={opportunityDetails.location}
        >
          <option value="" disabled>
            {opportunityDetails.state}
          </option>
          <option value="ACT">ACT</option>
          <option value="NSW">NSW</option>
          <option value="NT">NT</option>
          <option value="QLD">QLD</option>
          <option value="SA">SA</option>
          <option value="TAS">TAS</option>
          <option value="VIC">VIC</option>
          <option value="WA">WA</option>
        </select>
      </div>
      <div>
        <label htmlFor="amount">Scholarship value: </label>
        <input
          type="number"
          id="amount"
          placeholder="Amount"
          value={opportunityDetails.amount}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="attendance_mode">Attendance mode: </label>
        <select
          onChange={handleChange}
          id="attendance_mode"
          value={opportunityDetails.attendance_mode}
        >
          <option value="FACE_TO_FACE">Face to Face</option>
          <option value="ONLINE">Online</option>
        </select>
      </div>
      {/* <div>
        <label htmlFor="type">Type: </label>
        <DropDown
          options={typeOptions}
          value={opportunity.type}
          onChange={(event) =>
            setOpportunity((prev) => ({
              ...prev,
              type: event.target.value ? [parseInt(event.target.value)] : [],
            }))
          }
          placeholder="Select a type"
        />
      </div>
      <div>
        <label htmlFor="discipline">Discipline: </label>
        <DropDown
          options={disciplineOptions}
          value={opportunity.discipline}
          onChange={(event) =>
            setOpportunity((prev) => ({
              ...prev,
              discipline: event.target.value
                ? [parseInt(event.target.value)]
                : [],
            }))
          }
          placeholder="Select a discipline"
        />
      </div>
      <div>
        <label htmlFor="eligibility">Eligibility: </label>
        <DropDown
          options={eligibilityOptions}
          value={opportunity.eligibility}
          onChange={(event) =>
            setOpportunity((prev) => ({
              ...prev,
              eligibility: event.target.value
                ? [parseInt(event.target.value)]
                : [],
            }))
          }
          placeholder="Select eligibility"
        />
      </div> */}
      <div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <button type="button" onClick={handleCancle}>
          Cancel
        </button>
      </div>
    </form>
  );
}
