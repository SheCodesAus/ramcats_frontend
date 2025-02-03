import React, { useState } from "react";
import "./FilterOption.css";

const FilterOption = ({
  onFilterChange,
  onSortChange,
  currentFilters = {},
  hasResults = true,
  filtersApplied,
}) => {
  const [sortByDate, setSortByDate] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const stateOptions = [
    { value: "ACT", label: "Australian Capital Territory" },
    { value: "NSW", label: "New South Wales" },
    { value: "NT", label: "Northern Territory" },
    { value: "QLD", label: "Queensland" },
    { value: "SA", label: "South Australia" },
    { value: "TAS", label: "Tasmania" },
    { value: "VIC", label: "Victoria" },
    { value: "WA", label: "Western Australia" },
  ];

  const eligibilityOptions = [
    { value: "Women in STEM", label: "Women in STEM" },
    {
      value: "Aboriginal and Torres Strait Islander peoples",
      label: "Aboriginal and Torres Strait Islander peoples",
    },
    {
      value: "Refugees and Asylum Seekers",
      label: "Refugees and Asylum Seekers",
    },
    { value: "People with Disability", label: "People with Disability" },
    { value: "Low-income Families", label: "Low-income Families" },
    {
      value: "First Generation University Students",
      label: "First Generation University Students",
    },
  ];

  const disciplineOptions = [
    { value: "humanities", label: "Humanities" },
    { value: "computer-science", label: "Computer Science" },
    { value: "chemistry", label: "Chemistry" },
    { value: "biology", label: "Biology" },
    { value: "engineering", label: "Engineering" },
    { value: "mathematics", label: "Mathematics" },
  ];

  React.useEffect(() => {
    if (!hasResults) {
      setShowNotification(true);
    } else {
      setShowNotification(false);
    }
  }, [hasResults]);

  const handleSelectChange = (e, filterType) => {
    const value = e.target.value;
    onFilterChange({
      type: filterType,
      value: value,
    });
  };

  const handleSortClick = () => {
    const newSortValue = !sortByDate ? "-close_date" : "close_date";
    setSortByDate(!sortByDate);
    if (onSortChange) {
      onSortChange(newSortValue);
    }
  };

  const handleReset = () => {
    ["state", "eligibility", "discipline"].forEach((filterType) => {
      onFilterChange({
        type: filterType,
        value: "",
      });
    });
    setSortByDate(true);
    setShowNotification(false);
    if (onSortChange) {
      onSortChange("close_date");
    }
  };

  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`filter-wrapper ${isOpen ? "open" : ""}`}>
        <button className="toggle-filters-btn" onClick={toggleFilters}>
          {isOpen ? "Hide Filters" : "Show Filters"}
        </button>

        <div className="filter-container">
          <div className="filter-header">
            <h3>Filters</h3>
            <button
              className={`sort-button ${sortByDate ? "active" : ""}`}
              onClick={handleSortClick}
            >
              <span className="sort-label">
                Sort by Date {sortByDate ? "(Ascending)" : "(Descending)"}
              </span>
            </button>
          </div>

          <div className="dropdown-filters">
            <select
              className="filter-select"
              onChange={(e) => handleSelectChange(e, "state")}
              value={currentFilters.state || ""}
            >
              <option value="">Select State</option>
              {stateOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <select
              className="filter-select"
              onChange={(e) => handleSelectChange(e, "eligibility")}
              value={currentFilters.eligibility || ""}
            >
              <option value="">Select Eligibility</option>
              {eligibilityOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <select
              className="filter-select"
              onChange={(e) => handleSelectChange(e, "discipline")}
              value={currentFilters.discipline || ""}
            >
              <option value="">Select Discipline</option>
              {disciplineOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <button onClick={handleReset} className="reset-button">
            Reset Filters
          </button>
        </div>
      </div>

      {!hasResults && filtersApplied && (
        <div className="notification-container">
          <h4 className="notification-title">No Matching Results</h4>
          <p className="notification-message">
            No opportunities match your selected filters. Try adjusting your
            filters!
          </p>
          <img
            src="https://i.pinimg.com/originals/f3/78/4d/f3784dc54de78b85eac662dc55ba64aa.gif"
            alt="No results found"
            className="no-results-gif"
          />
        </div>
      )}
    </>
  );
};

export default FilterOption;
