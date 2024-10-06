import React, { useState } from "react";
import "./App.css";
import "./bubble.css";

const Bubble = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  const handleClick = () => {
    setIsAnimated(true);
    setTimeout(() => {
      setIsAnimated(false);
    }, 1000);
  };

  return (
    <div className={`bubble ${isAnimated ? "animated" : ""}`} onClick={handleClick}>
      {/* click on the bubble */}
    </div>
  );
};

export default Bubble;
