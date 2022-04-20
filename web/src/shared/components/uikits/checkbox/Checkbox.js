import React from "react";
import "./Checkbox.scss";

const Checkbox = ({ id, label, checked, onChange, name }) => {
  return (
    <label htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

export default Checkbox;
