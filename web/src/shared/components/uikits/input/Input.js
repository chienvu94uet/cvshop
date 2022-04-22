import React, { useEffect } from "react";
import "./Input.scss";

const Input = ({
  id,
  disabled,
  placeholder,
  onChange,
  value,
  disablePaste,
}) => {
  useEffect(() => {
    if (disablePaste) {
      const disablePaste = (e) => e.preventDefault();
      const inputElement = document.querySelector(`#${id}`);
      inputElement.addEventListener("paste", disablePaste);

      return () => {
        inputElement.removeEventListener("paste", disablePaste);
      };
    }
  }, [id, disablePaste]);

  return (
    <input
      id={id}
      type="text"
      disabled={disabled}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
