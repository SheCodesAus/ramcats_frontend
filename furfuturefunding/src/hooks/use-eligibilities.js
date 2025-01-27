import { useState, useEffect } from "react";

import getEligibilities from "../api/get-eligibilities";

export default function useEligbilities() {
  const [eligibilities, setEligibilities] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    getEligibilities()
      .then((eligibilities) => {
        setEligibilities(eligibilities);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  return { eligibilities, isLoading, error };
}
