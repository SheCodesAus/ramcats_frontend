import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import OpportunityCards from "../components/OpportunityCard";
import useOpportunities from "../hooks/use-opportunities";
import FilterOption from "../components/FilterOption";
import Footer from "../components/Footer";

const Homepage = () => {
  const [sortOrder, setSortOrder] = useState("close_date");
  const { opportunities, isLoading: initialLoading, error } = useOpportunities();

  const [filters, setFilters] = useState({
    state: "",
    eligibility: "",
    type: "",
    discipline: "",
  });

  React.useEffect(() => {
    if (opportunities?.length > 0) {
      console.log("Sample opportunity data:", {
        firstOpportunity: opportunities[0],
        eligibility: opportunities[0].eligibility,
        discipline: opportunities[0].discipline,
      });
    }
  }, [opportunities]);

  const handleFilterChange = ({ type, value }) => {
    setFilters((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const handleSortChange = (value) => {
    setSortOrder(value);
  };

  // Filter and sort opportunities
  const processedOpportunities = React.useMemo(() => {
    if (!opportunities) return [];

    let result = opportunities.filter((opportunity) => {
      if (!opportunity) return false;

      return (
        (filters.state === "" || opportunity.location === filters.state) &&
        (filters.eligibility === "" ||
          (Array.isArray(opportunity.eligibility) &&
            opportunity.eligibility.some(
              (e) => e.description === filters.eligibility
            ))) &&
        (filters.type === "" || opportunity.attendance_mode === filters.type) &&
        (filters.discipline === "" ||
          (Array.isArray(opportunity.discipline) &&
            opportunity.discipline.some(
              (d) => d.description === filters.discipline
            )))
      );
    });

    // Sort the filtered results
    result.sort((a, b) => {
      const dateA = new Date(a.close_date);
      const dateB = new Date(b.close_date);
      return sortOrder.startsWith("-") ? 
        dateB - dateA : // Descending
        dateA - dateB;  // Ascending
    });

    return result;
  }, [opportunities, filters, sortOrder]);

  if (initialLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img
          src="https://cdn.dribbble.com/users/160117/screenshots/3197970/main.gif"
          alt="Loading..."
          style={{
            border: "3px solid navy",
            borderRadius: "10px",
            width: "300px",
          }}
        />
      </div>
    );
  }

  const filtersApplied = Object.values(filters).some((value) => value !== "");
  const hasResults = processedOpportunities.length > 0 || !filtersApplied;

  return (
    <div className="homepage">
      <HeroSection />
      <div className="controls">
        <FilterOption
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
          currentFilters={filters}
          currentSort={sortOrder}
          hasResults={hasResults}
          filtersApplied={filtersApplied}
        />
      </div>
      <div className="opportunities-section">
        <h2 className="opportunities-title">
          Scholarship and Conference Opportunities
        </h2>
        {error ? (
          <div>Error: {error.message}</div>
        ) : processedOpportunities.length > 0 ? (
          <OpportunityCards opportunities={processedOpportunities} />
        ) : (
          <div className="no-results"></div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;