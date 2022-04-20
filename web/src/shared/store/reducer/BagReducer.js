import { UPDATE_TOTAL } from "store/action/BagAction";

function bagReducer(state, action) {
  switch (action.type) {
    case UPDATE_TOTAL:
      return {
        ...state,
        total: action.payload,
      };
    default:
      return state;
  }
}

export default bagReducer;
