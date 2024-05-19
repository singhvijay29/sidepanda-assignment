import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import ArrowIcon from "./Icons/ArrowIcon";
import "react-loading-skeleton/dist/skeleton.css";

const SlotDropdown = ({ isLoading }) => {
  return (
    <>
      {isLoading ? (
        <SkeletonTheme
          baseColor="#C7C9D9"
          highlightColor="#FAFAFC"
          height={"48px"}
        >
          <Skeleton baseColor="#FAFAFC" highlightColor="#C7C9D9" count={1} />
        </SkeletonTheme>
      ) : (
        <button className="time-slot-dropdown">
          60 min
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
      )}
    </>
  );
};

export default SlotDropdown;
