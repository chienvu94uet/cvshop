import React from "react";
import css from "classnames";
import "./Button.scss";

const Button = ({ onClick, children, disabled, type, size }) => {
  const className = css({
    btn: true,
    "btn--default": !type,
    [`btn--${type}`]: type,
    [`btn--${size}`]: size,
  });

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;
