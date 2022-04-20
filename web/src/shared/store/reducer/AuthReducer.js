import { LOGIN, LOGOUT } from "../action/AuthAction";

const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userID: action.payload.userID,
      };
      break;
    case LOGOUT:
      return {
        ...state,
        userID: 0,
      };
      break;
    default:
      return state;
      break;
  }
};

export default authReducer;
