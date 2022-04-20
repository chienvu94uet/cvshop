import { useContext } from "react";
import AppContext from "./AppContext";

function useAppContext() {
  const [state, dispatch] = useContext(AppContext);
  return [state, dispatch];
}

export { useAppContext };
