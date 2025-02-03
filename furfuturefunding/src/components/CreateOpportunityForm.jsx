import { useState } from "react";
import "./CreateOpportunityForm.css";
import { useAuth } from "../hooks/use-auth";
import { useParams } from "react-router-dom";
import postOpportunity from "../api/post-opportunity.js";
import { useNavigate } from "react-router-dom";
import useDisciplines from "../hooks/use-disciplines";
import useEligibilities from "../hooks/use-eligibilities";
import useTypes from "../hooks/use-types.js";
import Catmaskot from "../../src/img/ramcats_mascot.png";

function CreateOpportunityForm() {
  const { id } = useParams();
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const { disciplines } = useDisciplines();
  const { eligibilities } = useEligibilities();
  const { types } = useTypes();

  const [opportunity, setOpportunity] = useState({
    title: "",
    description: "",
    opportunity_url: "",
    amount: "",
    is_open: true,
    open_date: "",
    close_date: "",
    is_archive: false,
    location: "",
    attendance_mode: "",
    type: [],
    discipline: [],
    eligibility: [],
  });

  const handleChange = (event) => {
    console.log("Handle change working:", event.target.value);
    const { id, value } = event.target;

    setOpportunity((prevOpportunity) => ({
      ...prevOpportunity,
      [id]: value,
    }));
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setOpportunity((prevOpportunity) => ({
      ...prevOpportunity,
      [name]: ["type", "discipline", "eligibility"].includes(name)
        ? [parseInt(value)] // Store as an array
        : value, // Store as a string for location & attendance_mode
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      opportunity.title &&
      opportunity.description &&
      opportunity.opportunity_url &&
      opportunity.amount &&
      opportunity.is_open &&
      opportunity.open_date &&
      opportunity.close_date &&
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
      ).then((response) => {
        console.log("Response JSON:", response);
        window.localStorage.setItem("token", response.token);
        setAuth({
          token: response.token,
        });
        navigate("/");
        console.log("Form Data Submitted Final:", opportunity);
      });
    }
  };

  return (
    <div className="create-opportunity-page">
      <div className="create-opportunity-container">
        <div className="catmascot">
          <img src={Catmaskot} alt="Cat paw" className="paw" />
        </div>
        <h1>Create an Opportunity</h1>
        <form onSubmit={handleSubmit}>
          <div className="opportunity-form-group">
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              id="title"
              placeholder="Enter scholarship title:"
              onChange={handleChange}
            />

            <label htmlFor="description">Description: </label>
            <input
              type="text"
              id="description"
              placeholder="Scholarship Description"
              onChange={handleChange}
            />

            <label htmlFor="opportunity_url">Link to website: </label>
            <input
              type="url"
              id="opportunity_url"
              placeholder="Enter website URL"
              onChange={handleChange}
            />
            <label htmlFor="open_date">When does it open? </label>
            <input
              type="datetime-local"
              id="open_date"
              placeholder="Opening Date"
              onChange={handleChange}
            />
            <label htmlFor="close_date">When is it closing? </label>
            <input
              type="datetime-local"
              id="close_date"
              placeholder="Closing Date"
              onChange={handleChange}
            />
            <label htmlFor="location">Location: </label>
            <select name="location" onChange={onChangeHandler} defaultValue="">
              <option value="" disabled>
                --select a state--
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
              onChange={handleChange}
            />
            <label htmlFor="attendance_mode">Attendance mode: </label>
            <select
              name="attendance_mode"
              onChange={onChangeHandler}
              defaultValue=""
            >
              <option value="" disabled>
                --select an attendance mode--
              </option>
              <option value="FACE_TO_FACE">Face to Face</option>
              <option value="ONLINE">Online</option>
            </select>
            <label htmlFor="type">Type: </label>
            <select name="type" onChange={onChangeHandler} defaultValue="0">
              <option value="0" disabled>
                --select a type--
              </option>
              {types.map((typesData, key) => {
                return (
                  <option value={typesData.id} key={key}>
                    {typesData.description}
                  </option>
                );
              })}
            </select>
            <label htmlFor="discipline">Discipline: </label>
            <select
              name="discipline"
              onChange={onChangeHandler}
              defaultValue="0"
            >
              <option value="0" disabled>
                --select a discipline--
              </option>
              {disciplines.map((disciplinesData, key) => {
                return (
                  <option value={disciplinesData.id} key={key}>
                    {disciplinesData.description}
                  </option>
                );
              })}
            </select>
            <label htmlFor="eligibility">Eligibility: </label>
            <select
              name="eligibility"
              onChange={onChangeHandler}
              defaultValue="0"
            >
              <option value="0" disabled>
                --select an eligibility--
              </option>
              {eligibilities.map((eligibilitiesData, key) => {
                return (
                  <option value={eligibilitiesData.id} key={key}>
                    {eligibilitiesData.description}
                  </option>
                );
              })}
            </select>
          </div>
          <button type="submit" className="submit-btn">
            Create{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateOpportunityForm;
