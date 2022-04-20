import { CLOSE_TOAST, SHOW_TOAST } from "store/action/ToastAction";

function toastReducer(state, action) {
  switch (action.type) {
    case SHOW_TOAST:
      return {
        ...state,
        isShow: true,
      };
    case CLOSE_TOAST:
      return {
        ...state,
        isShow: false,
      };

    default:
      return state;
  }
}

export default toastReducer;
