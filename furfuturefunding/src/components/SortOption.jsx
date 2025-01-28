// SortOption.jsx
import React from 'react';

const SortOption = ({ onSortChange, currentSort = '' }) => {
  const sortOptions = [
    { value: 'newest', label: 'Newest to Oldest' },
    { value: 'oldest', label: 'Oldest to Newest' }
  ];

  const handleSortChange = (e) => {
    console.log('Sort changed:', e.target.value);
    onSortChange(e.target.value);
  };

  return (
    <div className="sort-container">
      <div className="sort-header">
        <h3>Sort by Closing Date</h3>
      </div>
      <div className="sort-dropdown">
        <select
          className="sort-select"
          onChange={handleSortChange}
          value={currentSort}
        >
          <option value="">Select Sort Order</option>
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SortOption;