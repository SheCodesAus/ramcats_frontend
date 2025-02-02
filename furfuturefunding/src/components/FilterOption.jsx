import React, { useState } from 'react';
import './FilterOption.css';

const FilterOption = ({ onFilterChange, onSortChange, currentFilters = {} }) => {
  const [sortByDate, setSortByDate] = useState(true);

  const stateOptions = [
    { value: 'ACT', label: 'Australian Capital Territory' },
    { value: 'NSW', label: 'New South Wales' },
    { value: 'NT', label: 'Northern Territory' },
    { value: 'QLD', label: 'Queensland' },
    { value: 'SA', label: 'South Australia' },
    { value: 'TAS', label: 'Tasmania' },
    { value: 'VIC', label: 'Victoria' },
    { value: 'WA', label: 'Western Australia' },
  ];

  const eligibilityOptions = [
    { value: 'women-in-stem', label: 'Women in STEM' },
    { value: 'aboriginal-and-torres-strait-islander', label: 'Aboriginal and Torres Strait Islander peoples' },
    { value: 'refugees-and-asylum-seekers', label: 'Refugees and Asylum Seekers' },
    { value: 'people-with-disability', label: 'People with Disability' },
    { value: 'low-income', label: 'Low-income Families' },
    { value: 'first-generation', label: 'First Generation University Students' }
  ];

  const disciplineOptions = [
    { value: 'humanities', label: 'Humanities' },
    { value: 'computer-science', label: 'Computer Science' },
    { value: 'chemistry', label: 'Chemistry' },
    { value: 'biology', label: 'Biology' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'mathematics', label: 'Mathematics' }
  ];

  const handleSelectChange = (e, filterType) => {
    const value = e.target.value;
    onFilterChange({
      type: filterType,
      value: value
    });
  };

  const handleReset = () => {
    ['state', 'eligibility', 'discipline'].forEach(filterType => {
      onFilterChange({
        type: filterType,
        value: ''
      });
    });
    setSortByDate(true);
    if (onSortChange) {
      onSortChange('date');
    }
  };

  const handleSortClick = () => {
    const newSortValue = !sortByDate;
    setSortByDate(newSortValue);
    if (onSortChange) {
      onSortChange(newSortValue ? 'date' : 'name');
    }
  };

  // Ensure we have string values or empty strings
  const disciplineValue = currentFilters?.discipline || '';
  const stateValue = currentFilters?.state || '';
  const eligibilityValue = currentFilters?.eligibility || '';

  return (
    <div className="filter-wrapper">
      <div className="filter-container">
        <div className="filter-header">
          <h3>Filters</h3>
          <button 
            className="sort-button"
            onClick={handleSortClick}
          >
            Sort by {sortByDate ? 'date' : 'name'}
          </button>
        </div>

        <div className="dropdown-filters">
          <select
            className="filter-select"
            onChange={(e) => handleSelectChange(e, 'state')}
            value={stateValue}
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
            onChange={(e) => handleSelectChange(e, 'eligibility')}
            value={eligibilityValue}
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
            onChange={(e) => handleSelectChange(e, 'discipline')}
            value={disciplineValue}
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
  );
};

export default FilterOption;