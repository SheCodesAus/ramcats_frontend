import React from "react";
import "./OpportunityCard.css";


const OpportunityCard = () => {
  const scholarshipData = [
    {
      title: "Scholarship for Advanced Studies",
      description:
        "A scholarship opportunity for students pursuing advanced studies in science and technology.",
      opening_date: "2023-01-01",
      closing_date: "2025-12-31",
      location: "NSW",
      study_mode: "ONLINE",
      eligibility: "First Nations Only",
      discipline: "Science",
      image: "src/assets/orglogo.png",
    },
    {
      title: "Indigenous Student Scholarship",
      description:
        "Supporting Indigenous students in pursuing higher education across all fields.",
      opening_date: "2023-06-01",
      closing_date: "2025-06-30",
      location: "QLD",
      study_mode: "On Campus",
      eligibility: "First Nations Only",
      discipline: "All Fields",
      image: "src/assets/orglogo.png",
    },
    {
      title: "Engineering Excellence Award",
      description:
        "Scholarship for outstanding students in engineering disciplines.",
      opening_date: "2023-09-01",
      closing_date: "2025-08-31",
      location: "VIC",
      study_mode: "Hybrid",
      eligibility: "First Nations Only",
      discipline: "Engineering",
      image: "src/assets/orglogo.png",
    },
    {
      title: "Healthcare Heroes Scholarship",
      description:
        "Supporting future healthcare professionals from Indigenous backgrounds.",
      opening_date: "2023-03-01",
      closing_date: "2025-02-28",
      location: "WA",
      study_mode: "ONLINE",
      eligibility: "First Nations Only",
      discipline: "Healthcare",
      image: "src/assets/orglogo.png",
    },
    {
      title: "Healthcare Heroes Scholarship",
      description:
        "Supporting future healthcare professionals from Indigenous backgrounds.",
      opening_date: "2023-03-01",
      closing_date: "2025-02-28",
      location: "WA",
      study_mode: "ONLINE",
      eligibility: "First Nations Only",
      discipline: "Healthcare",
      image: "src/assets/orglogo.png",
    },
    {
      title: "Healthcare Heroes Scholarship",
      description:
        "Supporting future healthcare professionals from Indigenous backgrounds.",
      opening_date: "2023-03-01",
      closing_date: "2025-02-28",
      location: "WA",
      study_mode: "ONLINE",
      eligibility: "First Nations Only",
      discipline: "Healthcare",
      image: "src/assets/orglogo.png",
    },
  ];
  return (
    <div className="opportunities-container">
      <h2 className="opportunities-title">
        Scholarship and Conference Opportunities
      </h2>
      <div className="opportunities-grid">
        {scholarshipData.map((scholarship, index) => (
          <div className="card" key={index}>
            <div className="header-section">
              <div className="image-container">
                <img
                  src={scholarship.image}
                  alt={scholarship.title}
                  className="card-image"
                />
              </div>
              <h2>{scholarship.title}</h2>
            </div>
            <div className="card-content">
              <div className="info-row">
                <span className="material-icons">business</span>
                <span>{scholarship.description}</span>
              </div>

              <div className="details">
                <div className="info-row">
                  <span className="material-icons">calendar_today</span>
                  <span>
                    Opens:{" "}
                    {new Date(scholarship.opening_date).toLocaleDateString()}
                  </span>
                </div>

                <div className="info-row">
                  <span className="material-icons">calendar_today</span>
                  <span>
                    Closes:{" "}
                    {new Date(scholarship.closing_date).toLocaleDateString()}
                  </span>
                </div>

                <div className="info-row">
                  <span className="material-icons">location_on</span>
                  <span>{scholarship.location}</span>
                </div>

                <div className="info-row">
                  <span className="material-icons">school</span>
                  <span>{scholarship.study_mode}</span>
                </div>
              </div>

              <div className="tags">
                <span className="tag">{scholarship.eligibility}</span>
                <span className="tag">{scholarship.discipline}</span>
              </div>

              <button className="apply-button">Apply Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpportunityCard;
