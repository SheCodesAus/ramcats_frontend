async function getOpportunities(sortOrder = "close_date") {
  const url = `${
    import.meta.env.VITE_API_URL
  }/opportunities/?ordering=${sortOrder}`;
  const response = await fetch(url, { method: "GET" });
  if (!response.ok) {
    const fallbackError = "Can't fetch the opportunities";
    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });

    const errorMessage = data?.details ?? fallbackError;
    throw new Error(errorMessage);
  }

  return await response.json();
}

export default getOpportunities;