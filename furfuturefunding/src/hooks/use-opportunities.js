import { useState, useEffect } from "react";

import getOpportunities from "../api/get-opportunities";

export default function useOpportunities() {
  const [opportunities, setOpportunities] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    getOpportunities()
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
