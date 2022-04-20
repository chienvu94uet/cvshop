import React from "react";
import "./Input.scss";

const Input = ({ disabled, placeholder, onChange }) => {
  return (
    <input
      type="text"
      disabled={disabled}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
