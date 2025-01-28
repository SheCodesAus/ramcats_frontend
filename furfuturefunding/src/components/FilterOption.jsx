// FilterOption.jsx
import React, { useState } from 'react';
import './FilterOption.css';

const FilterOption = ({ onFilterChange, onSortChange, currentFilters = {}, currentSort = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

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
    onFilterChange({
      type: filterType,
      value: e.target.value
    });
  };

  const handleSortClick = () => {
    const nextSort = !currentSort || currentSort === 'oldest' ? 'newest' : 'oldest';
    onSortChange(nextSort);
  };

  const handleReset = () => {
    ['state', 'eligibility', 'type', 'discipline'].forEach(filterType => {
      onFilterChange({
        type: filterType,
        value: ''
      });
    });
    onSortChange('');
  };

  return (
    <div className={`filter-wrapper ${isOpen ? 'open' : ''}`}>
      <button 
        className="toggle-filters-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="material-icons">
          {isOpen ? 'close' : 'filter_list'}
        </span>
        {isOpen ? 'Hide Filters' : 'Show Filters'}
      </button>

      <div className="filter-container">
        <div className="filter-header">
          <h3>Filters</h3>
          <button 
            onClick={handleSortClick}
            className={`sort-button ${currentSort ? 'active' : ''}`}
            title={currentSort === 'newest' ? 'Showing newest first' : currentSort === 'oldest' ? 'Showing oldest first' : 'Sort by date'}
          >
            <span className="material-icons">sort</span>
            <span className="sort-label">
              {currentSort === 'newest' ? 'Newest first' : 
               currentSort === 'oldest' ? 'Oldest first' : 
               'Sort by date'}
            </span>
          </button>
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
    </div>
  );
};

export default FilterOption;