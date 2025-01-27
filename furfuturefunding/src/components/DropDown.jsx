import React, { useState } from "react";
import useDisciplines from "../hooks/use-disciplines";
import useEligibilities from "../hooks/use-eligibilities";
import useTypes from "../hooks/use-types";
import useAttendanceMode from "../hooks/use-attendance_mode";
import "./DropDown.css";

function DropDown({ label, options = [], value, onChange, placeholder }) {
  const { eligibilities } = useEligibilities();
  const { disciplines } = useDisciplines();
  const { types } = useTypes();
  const { attendance_mode } = useAttendanceMode();

  // const attendanceModeOptions = attendance_mode.map((attendance_mode) => [{
  //   value: attendance_mode.id,
  //   label: attendance_mode.title,
  // }]);
  // const disciplineOptions = disciplines.map((disciplines) => [{
  //   value: disciplines.id,
  //   label: disciplines.title,
  // }]);

  // const typeOptions = types.map((type) => [{
  //   value: type.id,
  //   label: type.title,
  // }]);

  // const eligibilityOptions = eligibilities.map((eligibility) => [{
  //   value: eligibility.id,
  //   label: eligibility.title,
  // }]);

  return (
    <div>
      {label && <label htmlFor="dropdown">{label}</label>}
      <select id="dropdown" value={value} onChange={onChange}>
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
