import React, { useState } from "react";
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

  return;
}
export default OpportunityListingPage;
