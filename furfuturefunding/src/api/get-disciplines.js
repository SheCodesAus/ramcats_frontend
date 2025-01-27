async function getDisciplines([discipline]) {
  const url = `${import.meta.env.VITE_API_URL}/opportunities/${[discipline]}`;
  const response = await fetch(url, { method: "GET" });

  if (!response.ok) {
    const fallbackError = "Error fetching disciplines";

    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });

    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }

  return await response.json();
}

export default getDisciplines;
