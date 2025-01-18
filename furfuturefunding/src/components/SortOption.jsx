import React from 'react';

function SortOption({ onSortClick }) {
  return (
    <div className="sort-option">
      <button onClick={onSortClick}>Sort by Date</button>
    </div>
  );
}

export default SortOption;