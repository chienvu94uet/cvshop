import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeWindowHandler = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", resizeWindowHandler);

    return () => {
      window.removeEventListener("resize", resizeWindowHandler);
    };
  }, []);

  return width <= 768;
};

export default useIsMobile;
