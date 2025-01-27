import React, { useRef } from 'react';
import './FilterOption.css';

const FilterOption = ({ onFilterChange }) => {
  // Use refs to access select elements
  const selectRefs = {
    state: useRef(),
    eligibility: useRef(),
    type: useRef(),
    discipline: useRef(),
    sort: useRef()
  };

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
    { value: 'women-stem', label: 'Women in STEM' },
    { value: 'refugees', label: 'Refugees and Asylum Seekers' },
    { value: 'disability', label: 'People with Disability' },
    { value: 'low-income', label: 'Low-income Families' },
    { value: 'first-gen', label: 'First Generation University Students' },
    { value: 'student', label: 'Student' },
    { value: 'professional', label: 'Professional' },
    { value: 'graduate', label: 'Graduate' }
  ];

  const typeOptions = [
    { value: 'scholarship', label: 'Scholarship' },
    { value: 'grant', label: 'Grant' },
    { value: 'fellowship', label: 'Fellowship' }
  ];

  const disciplineOptions = [
    { value: 'humanities', label: 'Humanities' },
    { value: 'computer-science', label: 'Computer Science' },
    { value: 'chemistry', label: 'Chemistry' },
    { value: 'biology', label: 'Biology' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'mathematics', label: 'Mathematics' }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest to Oldest' },
    { value: 'oldest', label: 'Oldest to Newest' }
  ];

  const handleSelectChange = (e, filterType) => {
    onFilterChange({
      type: filterType,
      value: e.target.value
    });
  };

  const handleReset = () => {
    // Reset all select elements to their default value
    Object.values(selectRefs).forEach(ref => {
      if (ref.current) {
        ref.current.value = '';
      }
    });

    // Reset all filters in the parent component
    ['state', 'eligibility', 'type', 'discipline', 'sort'].forEach(filterType => {
      onFilterChange({
        type: filterType,
        value: ''
      });
    });
  };

  return (
    <div className="filter-container">
      <div className="filter-header">
        <h3>Filters</h3>
      </div>
      <div className="dropdown-filters">
        <select 
          ref={selectRefs.state}
          className="filter-select"
          onChange={(e) => handleSelectChange(e, 'state')}
          defaultValue=""
        >
          <option value="">Select State</option>
          {stateOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select 
          ref={selectRefs.eligibility}
          className="filter-select"
          onChange={(e) => handleSelectChange(e, 'eligibility')}
          defaultValue=""
        >
          <option value="">Select Eligibility</option>
          {eligibilityOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select 
          ref={selectRefs.type}
          className="filter-select"
          onChange={(e) => handleSelectChange(e, 'type')}
          defaultValue=""
        >
          <option value="">Select Type</option>
          {typeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select 
          ref={selectRefs.discipline}
          className="filter-select"
          onChange={(e) => handleSelectChange(e, 'discipline')}
          defaultValue=""
        >
          <option value="">Select Discipline</option>
          {disciplineOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* <select
          ref={selectRefs.sort}
          className="filter-select" 
          onChange={(e) => handleSelectChange(e, 'sort')}
          defaultValue=""
        >
          <option value="">Sort by</option>
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select> */}

        <button onClick={handleReset} className="reset-button">
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default FilterOption;