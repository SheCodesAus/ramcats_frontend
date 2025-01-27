async function getAttendanceMode([attendance_mode]) {
  const url = `${import.meta.env.VITE_API_URL}/opportunities/${[
    attendance_mode,
  ]}`;
  const response = await fetch(url, { method: "GET" });

  if (!response.ok) {
    const fallbackError = "Error fetching attendance mode";

    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });

    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }

  return await response.json();
}

export default getAttendanceMode;
