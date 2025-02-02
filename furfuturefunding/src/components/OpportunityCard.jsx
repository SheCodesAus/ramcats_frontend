import React, { useState } from "react";
import "./OpportunityCard.css";
import { Link } from "react-router-dom";

const OpportunityCards = ({ opportunities = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  if (!Array.isArray(opportunities)) {
    return <p>Invalid opportunities data.</p>;
  }

  const totalPages = Math.ceil(opportunities.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = opportunities.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div className="opportunities-container">
      <div className="opportunities-grid">
        {currentCards.map(opportunityData => (
          <OpportunityCard key={opportunityData.id} opportunitiesData={opportunityData} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const OpportunityCard = ({ opportunitiesData }) => {
  if (!opportunitiesData) {
    console.log("No opportunity data provided");
    return null;
  }

  const opportunityLink = `opportunities/${opportunitiesData.id}`;

  return (
    <Link to={opportunityLink}>
      <div className="opportunity-card">
        <div className="header-section">
          <div className="image-container">
            <img
              src={opportunitiesData.organisation?.logo || ''}
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
                Opens: {new Date(opportunitiesData.open_date).toLocaleDateString()}
              </span>
            </div>

            <div className="info-row">
              <span className="material-icons">calendar_today</span>
              <span>
                Closes: {new Date(opportunitiesData.close_date).toLocaleDateString()}
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
            {opportunitiesData.eligibility && 
              opportunitiesData.eligibility.map((eligibilityData) => (
                <span key={eligibilityData.id} className="tag">
                  {eligibilityData.description}
                </span>
              ))}
            {opportunitiesData.discipline && 
              opportunitiesData.discipline.map((disciplineData) => (
                <span key={disciplineData.id} className="tag">
                  {disciplineData.description}
                </span>
              ))}
            {opportunitiesData.type && 
              opportunitiesData.type.map((typeData) => (
                <span key={typeData.id} className="tag">
                  {typeData.description}
                </span>
              ))}
          </div>

          <button className="opp-card-apply-button">Find out more</button>
        </div>
      </div>
    </Link>
  );
};

export default OpportunityCards;
