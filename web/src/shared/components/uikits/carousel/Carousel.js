import React, { useState } from "react";
import "./Carousel.scss";

// https://w3collective.com/tag/css/
const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      >
        {React.Children.map(children, (child, idx) =>
          React.cloneElement(child, { width: "100%" })
        )}
      </div>
      <div className="carousel-control">
        <button onClick={() => updateActiveIndex(activeIndex - 1)}>
          Previous
        </button>
        <button onClick={() => updateActiveIndex(activeIndex + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
