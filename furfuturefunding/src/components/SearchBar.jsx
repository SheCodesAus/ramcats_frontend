import React, { useState } from 'react';

function SearchBar() {
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [state, setState] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', fieldOfStudy, 'in', state);
  };

  return (
    <form onSubmit={handleSearch} className="flex bg-white rounded-full overflow-hidden">
      <input
        type="text"
        placeholder="Field of Study"
        value={fieldOfStudy}
        onChange={(e) => setFieldOfStudy(e.target.value)}
        className="p-2 flex-grow text-black"
      />
      <select
        value={state}
        onChange={(e) => setState(e.target.value)}
        className="p-2 text-black"
      >
        <option value="">State</option>
        {/* Add state options here */}
      </select>
      <button type="submit" className="bg-orange-300 p-2 px-4">
        →
      </button>
    </form>
  );
}

export default SearchBar;