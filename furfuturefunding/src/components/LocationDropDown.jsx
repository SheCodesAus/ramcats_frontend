import React, { useState } from "react";

function SearchBar() {
  const [location, setLocation] = useState("");
  const [state, setState] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex bg-white rounded-full overflow-hidden"
    >
      <select
        value={state}
        onChange={(e) => setState(e.target.value)}
        className="p-2 text-black"
      >
        <option value="">State</option>[{/* Add state options here */}]
        <option value="New South Wales">NSW</option>
        <option value="Victoria">Victoria</option>
        <option value="Australian Capital Territory">ACT</option>
        <option value="Queensland">QLD</option>
        <option value="South Australia">SA</option>
        <option value="Tasmania">Tasmania</option>
        <option value="Western Australia">WA</option>
      </select>
    </form>
  );
}

export default SearchBar;
