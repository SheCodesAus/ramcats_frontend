import React from "react";
import { useEffect, useState } from "react";
import putOpportunity from "../api/put-opportunity";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import useOpportunity from "../hooks/use-opportunity";
import useEligbilities from "../hooks/use-eligibilities";
import useTypes from "../hooks/use-types";
import useDisciplines from "../hooks/use-disciplines";
import "./EditOpportunityForm.css";
import Catmaskot from "../../src/img/ramcats_mascot.png";
import Footer from "./Footer";

export default function EditOpportunityForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { opportunity, isLoading, error } = useOpportunity(id);
  const { eligibilities } = useEligbilities();
  const { types } = useTypes();
  const { disciplines } = useDisciplines();
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
    if (opportunity) {
      setOpportunityDetails((prevDetails) => ({
        ...prevDetails,
        ...opportunity,
        eligibility: opportunity.eligibility.map(
          (eligibilityData) => eligibilityData.id
        ),
        discipline: opportunity.discipline.map(
          (disciplineData) => disciplineData.id
        ),
        type: opportunity.type.map((typeData) => typeData.id),
      }));
    }
  }, [opportunity]);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img
          src="https://cdn.dribbble.com/users/160117/screenshots/3197970/main.gif"
          alt="Loading..."
          style={{
            border: "3px solid navy",
            borderRadius: "10px",
            width: "300px",
          }}
        />
      </div>
    );
  }
  if (error) {
    return (
      <p>
        Error loading opportunity details:{" "}
        {error.message || "An error occurred."}
      </p>
    );
  }

  const handleCancle = (event) => {
    event.preventDefault();
    navigate("/opportunities/" + id);
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setOpportunityDetails((prevOpportunityDetails) => ({
      ...prevOpportunityDetails,
      [id]: value,
    }));
  };

  const handleMultiSelectChange = (e, fieldName) => {
    const selectedValue = parseInt(e.target.value);

    setOpportunityDetails((prevOpportunityDetails) => ({
      ...prevOpportunityDetails,
      [fieldName]: [selectedValue],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting opportunity:", opportunityDetails);
    if (
      opportunityDetails.title &&
      opportunityDetails.description &&
      opportunityDetails.opportunity_url &&
      opportunityDetails.amount &&
      opportunityDetails.open_date &&
      opportunityDetails.close_date &&
      opportunityDetails.attendance_mode &&
      opportunityDetails.location &&
      opportunityDetails.eligibility &&
      opportunityDetails.discipline &&
      opportunityDetails.type
    ) {
      putOpportunity(
        id,
        opportunityDetails.title,
        opportunityDetails.description,
        opportunityDetails.opportunity_url,
        opportunityDetails.amount,
        opportunityDetails.open_date,
        opportunityDetails.close_date,
        opportunityDetails.attendance_mode,
        opportunityDetails.location,
        opportunityDetails.eligibility,
        opportunityDetails.discipline,
        opportunityDetails.type
      ).then(() => {
        navigate("/opportunities/" + id);
        console.log("Form Data Submitted:", opportunityDetails);
      });
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="edit-opportunity-page">
      <div className="edit-opportunity-container">
        <div className="catmascot">
          <img src={Catmaskot} alt="Cat paw" className="paw" />
        </div>
        <h1>Edit form</h1>
        <form>
          <div className="opportunity-form-group">
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              id="title"
              placeholder="Enter scholarship title:"
              value={opportunityDetails.title}
              onChange={handleChange}
            />
            <label htmlFor="description">Description: </label>
            <input
              type="text"
              id="description"
              placeholder="Scholarship Description"
              value={opportunityDetails.description}
              onChange={handleChange}
            />
            <label htmlFor="opportunity_url">Link to website: </label>
            <input
              type="url"
              id="opportunity_url"
              placeholder="Enter website URL"
              value={opportunityDetails.opportunity_url}
              onChange={handleChange}
            />
            <label htmlFor="open_date">When does it open? </label>
            <input
              type="datetime-local"
              id="open_date"
              placeholder="Opening Date"
              value={opportunityDetails.open_date}
              onChange={handleChange}
            />
            <label htmlFor="close_date">When is it closing? </label>
            <input
              type="datetime-local"
              id="close_date"
              placeholder="Closing Date"
              value={opportunityDetails.close_date}
              onChange={handleChange}
            />
            <label htmlFor="location">Location: </label>
            <select
              onChange={handleChange}
              id="location"
              value={opportunityDetails.location}
            >
              <option value="" disabled>
                {opportunityDetails.location}
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
            <label htmlFor="amount">Scholarship value: </label>
            <input
              type="number"
              id="amount"
              placeholder="Amount"
              value={opportunityDetails.amount}
              onChange={handleChange}
            />
            <label htmlFor="attendance_mode">Attendance mode: </label>
            <select
              onChange={handleChange}
              id="attendance_mode"
              value={opportunityDetails.attendance_mode}
            >
              <option value="FACE_TO_FACE">Face to Face</option>
              <option value="ONLINE">Online</option>
            </select>
            <label htmlFor="eligibility">Eligibility</label>
            <select
              onChange={(e) => handleMultiSelectChange(e, "eligibility")}
              id="eligibility"
              value={opportunityDetails.eligibility}
            >
              {eligibilities.map((eligibilityData) => (
                <option key={eligibilityData.id} value={eligibilityData.id}>
                  {eligibilityData.description}
                </option>
              ))}
            </select>
            <label htmlFor="discipline">Discipline</label>
            <select
              onChange={(e) => handleMultiSelectChange(e, "discipline")}
              id="discipline"
              value={opportunityDetails.discipline}
            >
              {disciplines.map((disciplinesData) => (
                <option key={disciplinesData.id} value={disciplinesData.id}>
                  {disciplinesData.description}
                </option>
              ))}
            </select>
            <label htmlFor="type">Type</label>
            <select
              onChange={(e) => handleMultiSelectChange(e, "type")}
              id="type"
              value={opportunityDetails.type}
            >
              {types.map((typesData) => (
                <option key={typesData.id} value={typesData.id}>
                  {typesData.description}
                </option>
              ))}
            </select>
            <div>
              <button
                type="submit"
                className="edit-submit-btn"
                onClick={handleSubmit}
              >
                Submit
              </button>
              <button
                type="button"
                className="edit-submit-btn"
                onClick={handleCancle}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
