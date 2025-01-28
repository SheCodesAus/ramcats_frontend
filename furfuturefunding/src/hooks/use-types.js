import { useState, useEffect } from "react";

import getTypes from "../api/get-types";

export default function useTypes() {
  const [types, setTypes] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    getTypes()
      .then((types) => {
        setTypes(types);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  return { types, isLoading, error };
}
