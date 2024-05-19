import React from "react";
import ArrowIcon from "./Icons/ArrowIcon";

const SlotDropdown = () => {
  return (
    <button className="time-slot-dropdown">
      30 min
      <div
        style={{
          position: "absolute",
          right: 12,
          top: 12,
          bottom: 0,
        }}
      >
        <ArrowIcon />
      </div>
    </button>
  );
};

export default SlotDropdown;
