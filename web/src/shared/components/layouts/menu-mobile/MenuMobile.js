import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./MenuMobile.scss";

const MenuMobile = ({ show }) => {
  return ReactDOM.createPortal(
    <CSSTransition
      mountOnEnter
      unmountOnExit
      timeout={200}
      in={show}
      classNames="menu-mobile-transition"
    >
      <div className={`menu-mobile ${show ? "show" : ""}`}>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </CSSTransition>,
    document.getElementById("menu-mobile-root")
  );
};

export default MenuMobile;
