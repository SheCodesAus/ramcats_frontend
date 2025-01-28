import React from 'react';
import './FilterOption.css';

const FilterOption = ({ onFilterChange, currentFilters = {} }) => {
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
    { value: 'Women in STEM', label: 'Women in STEM' },
    { value: 'Aboriginal and Torres Strait Islander peoples', label: 'Aboriginal and Torres Strait Islander peoples' },
    { value: 'Refugees and Asylum Seekers', label: 'Refugees and Asylum Seekers' },
    { value: 'People with Disability', label: 'People with Disability' },
    { value: 'Low-income Families', label: 'Low-income Families' },
    { value: 'First Generation University Students', label: 'First Generation University Students' }
  ];

  const typeOptions = [
    { value: 'ONLINE', label: 'Online' },
    { value: 'FACE_TO_FACE', label: 'Face to Face' }
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
    console.log(`Filter changed: ${filterType} = ${e.target.value}`);
    onFilterChange({
      type: filterType,
      value: e.target.value
    });
  };

  const handleReset = () => {
    ['state', 'eligibility', 'type', 'discipline'].forEach(filterType => {
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
          className="filter-select"
          onChange={(e) => handleSelectChange(e, 'state')}
          value={currentFilters.state || ''}
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
          value={currentFilters.eligibility || ''}
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
          onChange={(e) => handleSelectChange(e, 'type')}
          value={currentFilters.type || ''}
        >
          <option value="">Select Type</option>
          {typeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select 
          className="filter-select"
          onChange={(e) => handleSelectChange(e, 'discipline')}
          value={currentFilters.discipline || ''}
        >
          <option value="">Select Discipline</option>
          {disciplineOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <button onClick={handleReset} className="reset-button">
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default FilterOption;