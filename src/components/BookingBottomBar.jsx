import React from "react";
import ArrowIcon from "./Icons/ArrowIcon";

const BookingBottomBar = () => {
  return (
    <div className="booking-bottom-bar">
      <div
        style={{
          color: "white",
          fontWeight: 600,
          fontSize: 12,
        }}
      >
        POWERED BY{" "}
        <span
          style={{
            textDecoration: "underline",
          }}
        >
          APPOINTO
        </span>
      </div>
      <button className="next-button" style={{}}>
        Next{" "}
        <div
          style={{
            transform: "rotate(-95deg)",
          }}
        >
          <ArrowIcon />
        </div>
      </button>
    </div>
  );
};

export default BookingBottomBar;
