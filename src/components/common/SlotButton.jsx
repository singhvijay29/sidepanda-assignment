import React, { useState } from "react";
import WhiteTickMark from "../Icons/WhiteTickMark";

const SlotButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      onClick={() => setIsHovered(!isHovered)}
      className="time-slot-button"
      style={{
        background: isHovered && "#378760",
        color: isHovered && "white",
        textAlign: isHovered && "left",
      }}
    >
      03:30 PM - 04:00 PM
      <div
        style={{
          position: "absolute",
          right: 12,
          top: 12,
          bottom: 0,
        }}
      >
        <WhiteTickMark />
      </div>
    </button>
  );
};

export default SlotButton;
