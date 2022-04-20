import React from "react";
import "./Input.scss";

const Input = ({ disabled, placeholder, onChange, value }) => {
  return (
    <input
      type="text"
      disabled={disabled}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
