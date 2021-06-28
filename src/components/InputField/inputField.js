import React from "react";
import "./input.css";

export const Input = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search"
      type="search "
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
