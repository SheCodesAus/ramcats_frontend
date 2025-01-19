import React, { useState } from "react";
import { oneOpportunity } from "../data";
import { useParams } from "react-router-dom";
import useOpportunities from "../hooks/use-opportunities";
import "./OpportunityListingPage.css";

function OpportunityListingPage() {
  const { id } = useParams();
  const { opportunities, isLoading, error } = useOpportunities();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <h2>{oneOpportunity.title}</h2>
      <h3>Created at: {oneOpportunity.date_created}</h3>
      <h3>{`Status: ${oneOpportunity.is_open}`}</h3>
      <h4>{`Description of scholarship: ${oneOpportunity.description}`}</h4>
      <h5>{`Attendance mode: ${oneOpportunity.attendance_mode}`}</h5>
      <h5>{`Location of scholarship: ${oneOpportunity.location}`}</h5>
    </div>
  );
}
export default OpportunityListingPage;
