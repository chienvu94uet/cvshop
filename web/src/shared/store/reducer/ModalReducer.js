import { OPEN, CLOSE } from "../action/ModalAction";

const modalReducer = (state, action) => {
  switch (action.type) {
    case OPEN:
      return {
        ...state,
        isShow: true,
      };
      break;
    case CLOSE:
      return {
        ...state,
        isShow: false,
      };
      break;
    default:
      return state;
      break;
  }
};

export default modalReducer;
