async function postOpportunity(
  title,
  description,
  opportunity_url,
  amount,
  is_open,
  open_date,
  close_date,
  is_archive,
  location,
  attendance_mode,
  type,
  discipline,
  eligibility
) {
  const url = `${import.meta.env.VITE_API_URL}/opportunities/`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${window.localStorage.getItem("token")}`,
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
      location: location,
      attendance_mode: attendance_mode,
      type: type,
      discipline: discipline,
      eligibility: eligibility,
    }),
  });

  if (!response.ok) {
    const fallbackError = `Error trying to create an opportunity`;

    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });

    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }

  return await response.json();
}

export default postOpportunity;
