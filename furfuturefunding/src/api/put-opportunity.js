async function putOpportunity(
  opportunityId,
  title,
  description,
  opportunity_url,
  amount,
  open_date,
  close_date,
  attendance_mode,
  location,
  eligibility,
  discipline,
  type
) {
  const url = `${import.meta.env.VITE_API_URL}/opportunities/${opportunityId}`;
  const token = window.localStorage.getItem("token");
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify({
      title: title,
      description: description,
      opportunity_url: opportunity_url,
      amount: amount,
      is_open: is_open,
      open_date: open_date,
      close_date: close_date,
      is_archive: is_archive,
      attendance_mode: attendance_mode,
      location: location,
      eligibility: eligibility,
      discipline: discipline,
      type: type,
    }),
  });

  if (!response.ok) {
    const fallbackError = `Error saving the edit project`;

    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });

    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }

  return await response.json();
}

export default putOpportunity;
