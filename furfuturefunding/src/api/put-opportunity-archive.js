async function archiveOpportunity(opportunityId, is_archive) {
  const url = `${import.meta.env.VITE_API_URL}/opportunities/${opportunityId}`;
  const token = window.localStorage.getItem("token");
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify({
      is_archive: is_archive,
    }),
  });

  if (!response.ok) {
    const fallbackError = `Unable to archive the opportunity`;

    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });

    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }

  return await response.json();
}

export default archiveOpportunity;
