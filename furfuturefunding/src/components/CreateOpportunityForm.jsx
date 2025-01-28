import { useState } from "react";
import DropDown from "./DropDown.jsx";
import "./CreateOpportunityForm.css";
import { useAuth } from "../hooks/use-auth";
import { useParams } from "react-router-dom";
import postOpportunity from "../api/post-opportunity.js";
import { useNavigate } from "react-router-dom";
import {
  aus_states,
  attendanceMode,
  disciplineOptions,
  typeOptions,
  eligibilityOptions,
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
    console.log("Handle change working", opportunity),
      setOpportunity((prevOpportunity) => ({
        ...prevOpportunity,

        [id]: value,
      }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting opportunity:", opportunity);
    if (
      (opportunity.title &&
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
        opportunity.eligibility,
      console.log("Form Data Submitted:", opportunity))
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
        opportunity.eligibility,
        console.log("Form Data Submitted:", opportunity)
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
          options={attendanceMode}
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
      </div>
      <button type="submit">Create </button>
    </form>
  );
}

export default CreateOpportunityForm;
