import React from 'react';
import './FilterOption.css';

const FilterOption = ({ filterGroups, selectedOptions, setSelectedOptions }) => {
  const handleOptionClick = (group, option) => {
    setSelectedOptions(prevSelected => ({
      ...prevSelected,
      [group]: prevSelected[group]?.includes(option)
        ? prevSelected[group].filter(item => item !== option)
        : [...(prevSelected[group] || []), option]
    }));
  };

  return (
    <div className="filter-container">
      <div className="filter-section">
        <h6>Filters</h6>
        {filterGroups.map(({ title, options }) => (
          <div className="filters" key={title}>
            <h5 className="filters__title">{title}</h5>
            {options.map((option) => (
              <div className="filters__item" key={option.value}>
                <div className="checkbox-wrapper">
                  <div className="checkbox">
                    <input
                      id={`checkbox-${title}-${option.value}`}
                      type="checkbox"
                      checked={selectedOptions[title]?.includes(option.value) || false}
                      onChange={() => handleOptionClick(title, option.value)}
                    />
                    <label htmlFor={`checkbox-${title}-${option.value}`}>
                      <span className="box"></span>
                      {option.label}
                    </label>
                  </div>
                  <span className="badge">{option.count}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterOption;