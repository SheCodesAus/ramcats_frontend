import React, { useState } from "react";
import useDisciplines from "../hooks/use-disciplines";
import useEligibilities from "../hooks/use-eligibilities";
import useTypes from "../hooks/use-types";
import "./DropDown.css";

function DropDown({ id, label, options = [], value, onChange, placeholder }) {
  const { eligibilities } = useEligibilities();
  const { disciplines } = useDisciplines();
  const { types } = useTypes();

  // const disciplineOptions = disciplines.map((disciplines) => [
  //   {
  //     value: disciplines.id,
  //     label: disciplines.title,
  //   },
  // ]);

  // const typeOptions = types.map((type) => [
  //   {
  //     value: type.id,
  //     label: type.title,
  //   },
  // ]);

  // const eligibilityOptions = eligibilities.map((eligibility) => [
  //   {
  //     value: eligibility.id,
  //     label: eligibility.title,
  //   },
  // ]);

  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <select id={id} value={value} onChange={onChange}>
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
