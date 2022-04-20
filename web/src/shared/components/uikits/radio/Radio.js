import React from "react";
import "./Radio.scss";

const Radio = ({ id, label, checked, onChange, name }) => {
  return (
    <label htmlFor={id}>
      <input
        id={id}
        name={name}
        type="radio"
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

export default Radio;
