import React from "react";
import "./OpportunityCard.css";
import { Link } from "react-router-dom";

const OpportunityCard = (props) => {
  const { opportunitiesData } = props;
  const opportunityLink = `opportunities/${opportunitiesData.id}`;

  return (
    <Link to={opportunityLink}>
      <div className="card">
        <div className="header-section">
          <div className="image-container">
            <img
              src={opportunitiesData.image}
              alt={opportunitiesData.title}
              className="card-image"
            />
          </div>
          <h2>{opportunitiesData.title}</h2>
        </div>
        <div className="card-content">
              <div className="info-row">
                <span className="material-icons">business</span>
                <span>{opportunitiesData.description}</span>
              </div>

              <div className="details">
                <div className="info-row">
                  <span className="material-icons">calendar_today</span>
                  <span>
                    Opens:{" "}
                    {new Date(opportunitiesData.open_date).toLocaleDateString()}
                  </span>
                </div>

                <div className="info-row">
                  <span className="material-icons">calendar_today</span>
                  <span>
                    Closes:{" "}
                    {new Date(
                      opportunitiesData.close_date
                    ).toLocaleDateString()}
                  </span>
                </div>

                <div className="info-row">
                  <span className="material-icons">location_on</span>
                  <span>{opportunitiesData.location}</span>
                </div>

                <div className="info-row">
                  <span className="material-icons">school</span>
                  <span>{opportunitiesData.attendance_mode}</span>
                </div>
              </div>

              <div className="tags">
                {opportunitiesData.eligibility.map((eligibilityData) => (
                  <span key={eligibilityData.id} className="tag">
                    {eligibilityData.description}
                  </span>
                ))}
                {opportunitiesData.discipline.map((disciplineData) => (
                  <span key={disciplineData.id} className="tag">
                    {disciplineData.description}
                  </span>
                ))}
              </div>

              <button className="apply-button">Find out more</button>
            </div>
          </div>
      </Link>
  );
};

export default OpportunityCard;
