import React, { useState } from "react";

function LocationDropDown() {
  const [location, setLocation] = useState("Select Location");
  const handleChange = (event) => {
    setLocation(event.target.value);
  };
  return (
    <select value={location} onChange={handleChange}>
      <option value="NSW">NSW</option>
      <option value="QLD">QLD</option>
      <option value="NT">NT</option>
      <option value="ACT">ACT</option>
      <option value="Tasmania">Tasmania</option>
      <option value="SA">SA</option>
      <option value="WA">WA</option>
    </select>
  );
}

export default LocationDropDown;
