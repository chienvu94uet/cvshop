import React from "react";
import "./Radio.scss";

const Radio = ({ label, checked, onChange }) => {
  return (
    <label>
      <input type="radio" checked={checked} onChange={onChange} />
      {label}
    </label>
  );
};

export default Radio;
