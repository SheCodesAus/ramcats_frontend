import { useState, useEffect } from "react";
import getAttendanceMode from "../api/get-attendance_mode";

export default function useAttendanceMode() {
  const [attendanceMode, setAttendanceMode] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    getAttendanceMode()
      .then((attendanceMode) => {
        setAttendanceMode(attendanceMode);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  return { attendanceMode, isLoading, error };
}
