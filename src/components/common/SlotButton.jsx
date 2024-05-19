import moment from "moment";
import React, { useState } from "react";
import WhiteTickMark from "../Icons/WhiteTickMark";

const SlotButton = ({ el }) => {
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
      {moment(el?.start_time).format("hh:mm A")} -{" "}
      {moment(el?.end_time).format("hh:mm A")}
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
