import React from "react";
import { CloseIcon } from "components/icons";
import { CLOSE_TOAST } from "store/action/ToastAction";
import { useAppContext } from "store/hooks";
import "./Toast.scss";

const Toast = () => {
  const [state, dispatch] = useAppContext();

  const closeToastHandler = () => {
    dispatch({
      type: CLOSE_TOAST,
    });
  };

  return (
    <div data-toast className={`toast ${state.toast.isShow ? "show" : ""}`}>
      <div className="toast__banner">
        <img
          src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/jewellery-1.jpg"
          alt="toast-banner"
          width={80}
          height={70}
        />
      </div>
      <div className="toast__detail">
        <p className="toast__message">Someone in new just buy</p>
        <p className="toast__title">Rose Gold Earrings</p>
        <p className="toast-meta">
          <time dateTime="PT2M">2 Minutes</time> ago
        </p>
      </div>
      <CloseIcon width={18} onClick={closeToastHandler} />
    </div>
  );
};

export default Toast;
