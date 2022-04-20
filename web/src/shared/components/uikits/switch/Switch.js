import React from "react";
import css from "classnames";
import "./Switch.scss";

// USE Small: <Switch onChange={(e) => console.log(e.target.checked)} width={50} height={25}/>
// USE Big: <Switch onChange={(e) => console.log(e.target.checked)} width={100} height={50}/>

const Switch = ({ onChange, width, height }) => {
  return (
    <>
      <input
        type="checkbox"
        id="switch"
        className="switch__checkbox"
        onChange={onChange}
      />
      <label
        htmlFor="switch"
        className={css(
          "switch__label",
          width && `switch__label--width-${width}`,
          height && `switch__label--height-${height}`
        )}
      >
        <span
          className={css(
            "switch__button",
            height < 50 &&
              width > 50 &&
              `switch__button--width-${height}-percent`
          )}
        ></span>
      </label>
    </>
  );
};

export default Switch;
