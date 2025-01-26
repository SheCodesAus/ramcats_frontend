import { useState } from "react";
import DropDown from "./DropDown.jsx";
import "./CreateOpportunityForm.css";
import { useAuth } from "../hooks/use-auth";
import { useParams } from "react-router-dom";
import postOpportunity from "../api/post-opportunity.js";
import { useNavigate } from "react-router-dom";
import {
  aus_states,
  attendance_mode,
  discipline_options,
  type_options,
  eligibility_options,
} from "../data.js";

function CreateOpportunityForm() {
  const { id } = useParams();
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const [opportunity, setOpportunity] = useState({
    title: "",
    description: "",
    opportunity_url: "",
    amount: "",
    is_open: true,
    open_date: "",
    close_date: "",
    is_archive: "",
    location: "",
    attendance_mode: "",
    type: [],
    discipline: [],
    eligibility: [],
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setOpportunity((prevOpportunity) => ({
      ...prevOpportunity,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting opportunity:", opportunity);
    if (
      opportunity.title &&
      opportunity.description &&
      opportunity.opportunity_url &&
      opportunity.amount &&
      opportunity.is_open &&
      opportunity.open_date &&
      opportunity.close_date &&
      opportunity.is_archive &&
      opportunity.location &&
      opportunity.attendance_mode &&
      opportunity.type &&
      opportunity.discipline &&
      opportunity.eligibility
    ) {
      postOpportunity(
        opportunity.title,
        opportunity.description,
        opportunity.opportunity_url,
        opportunity.amount,
        opportunity.is_open,
        opportunity.open_date,
        opportunity.close_date,
        opportunity.is_archive,
        opportunity.location,
        opportunity.attendance_mode,
        opportunity.type,
        opportunity.discipline,
        opportunity.eligibility
      ).then(() => {
        navigate("/");
        console.log("Form Data Submitted:", opportunity);
      });
    }
  };

  return (
    <form className="create-opportunity" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          placeholder="Enter scholarship title:"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          id="description"
          placeholder="Scholarship Description"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="opportunity_url">Link to website: </label>
        <input
          type="url"
          id="opportunity_url"
          placeholder="Enter website URL"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="open_date">When does it open? </label>
        <input
          type="datetime-local"
          id="open_date"
          placeholder="Opening Date"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="close_date">When is it closing? </label>
        <input
          type="datetime-local"
          id="close_date"
          placeholder="Closing Date"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="location">Location: </label>
        <DropDown
          options={aus_states}
          value={opportunity.location}
          onChange={(event) =>
            setOpportunity((prev) => ({
              ...prev,
              location: event.target.value,
            }))
          }
          placeholder="Select a state"
        />
      </div>
      <div>
        <label htmlFor="amount">Scholarship value: </label>
        <input
          type="number"
          id="amount"
          placeholder="Amount"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="attendance_mode">Attendance mode: </label>
        <DropDown
          options={attendance_mode}
          value={opportunity.attendance_mode}
          onChange={(event) =>
            setOpportunity((prev) => ({
              ...prev,
              attendance_mode: event.target.value,
            }))
          }
          placeholder="Select an attendance mode"
        />
      </div>
      <div>
        <label htmlFor="type">Type: </label>
        <DropDown
          options={type_options}
          value={opportunity.type}
          onChange={(event) =>
            setOpportunity((prev) => ({ ...prev, type: event.target.value }))
          }
          placeholder="Select a type"
        />
      </div>
      <div>
        <label htmlFor="discipline">Discipline: </label>
        <DropDown
          options={discipline_options}
          value={opportunity.discipline}
          onChange={(event) =>
            setOpportunity((prev) => ({
              ...prev,
              discipline: event.target.value,
            }))
          }
          placeholder="Select a discipline"
        />
      </div>
      <div>
        <label htmlFor="eligibility">Eligibility: </label>
        <DropDown
          options={eligibility_options}
          value={opportunity.eligibility_options}
          onChange={(event) =>
            setOpportunity((prev) => ({
              ...prev,
              eligibility: event.target.value,
            }))
          }
          placeholder="Select eligibility"
        />
      </div>
      <button type="submit">Create </button>
    </form>
  );
}

export default CreateOpportunityForm;
