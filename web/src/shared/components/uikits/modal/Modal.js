import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./Modal.scss";

// https://codesandbox.io/s/magical-christian-qxtdm?from-embed=&file=/src/Modal/Modal.css:450-480
const Modal = ({ show, close, title, children }) => {
  useEffect(() => {
    const onKeyUpEscapeHandler = (e) => {
      if ((e.charCode || e.keyCode) === 27) {
        close();
      }
    };

    window.addEventListener("keyup", onKeyUpEscapeHandler);

    return () => {
      window.removeEventListener("keyup", onKeyUpEscapeHandler);
    };
  }, []);

  const modalContent = (
    <CSSTransition
      in={show}
      unmountOnExit
      timeout={{
        enter: 0,
        exit: 300,
      }}
    >
      <div className={`modal ${show ? "show" : ""}`} onClick={close}>
        <div className="modal-main" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button onClick={close}>Close</button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
  return ReactDOM.createPortal(
    modalContent,
    document.querySelector("#modal-root")
  );
};

export default Modal;
