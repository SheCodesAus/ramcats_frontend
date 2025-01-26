import React, { useState } from "react";
// import "DropDown.css";

function DropDown({ label, options = [], value, onChange, placeholder }) {
  return (
    <div>
      {label && <label htmlFor="dropdown">{label}</label>}
      <select
        id="dropdown"
        value={value}
        onChange={onChange}
        className="border rounded-lg px-4 py-2 bg-white focus:outline-none"
      >
        <option value="" disabled>
          {placeholder || "Select an option"}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDown;
