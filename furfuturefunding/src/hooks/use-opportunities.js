import { useState, useEffect } from "react";
import getOpportunities from "../api/get-opportunities";

export default function useOpportunities(sortOrder = "close_date") {
  const [opportunities, setOpportunities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    getOpportunities(sortOrder)
      .then((opportunities) => {
        setOpportunities(opportunities);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [sortOrder]); // Re-fetch when sorting order changes

  return { opportunities, isLoading, error };
}