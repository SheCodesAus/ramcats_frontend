import { useState, useEffect } from "react";
import getDisciplines from "../api/get-disciplines";

export default function useDisciplines() {
  const [disciplines, setDisciplines] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    getDisciplines()
      .then((disciplines) => {
        setDisciplines(disciplines);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  return { disciplines, isLoading, error };
}
