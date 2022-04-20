import React, { useReducer } from "react";
import AppContext from "./AppContext";
import initialState from "./initialState";
import { AuthReducer, combineReducer, ModalReducer } from "./reducer";

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    combineReducer({
      auth: AuthReducer,
      modal: ModalReducer,
    }),
    initialState
  );

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
