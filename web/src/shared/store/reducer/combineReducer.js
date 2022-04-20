const combineReducer = (reducers) => {
  return (state, action) => {
    let newState = {};
    for (const [key, value] of Object.entries(reducers)) {
      newState[key] = value(state[key], action);
    }

    return newState;
  };
};

export default combineReducer;
