import { useState, useEffect } from "react";
import getOpportunity from "../api/get-opportunity";


export default function useOpportunity(opportunityId, opportunityData) {
  const [opportunity, setOpportunity] = useState();

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    if (!opportunityId) {
        console.log("No opportunity ID provided");
        setIsLoading(false);
        return
    }
    console.log(opportunity)

    getOpportunity(opportunityId)
      .then((opportunity) => {
        setOpportunity(opportunity);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [opportunityId]);

  return { opportunity, isLoading, error };
}