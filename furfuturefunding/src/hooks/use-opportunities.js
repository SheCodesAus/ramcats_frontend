import { useState, useEffect } from "react";

import getOpportunity from "../api/get-opportunity";

export default function useOpportunities() {
  const [opportunities, setOpportunities] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    getOpportunity()
      .then((opportunities) => {
        setOpportunities(opportunities);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  return { opportunities, isLoading, error };
}
