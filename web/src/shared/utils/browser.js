export const back = () => history.back();

export const isBrowser = () =>
  ![typeof window, typeof document].includes("undefined");
