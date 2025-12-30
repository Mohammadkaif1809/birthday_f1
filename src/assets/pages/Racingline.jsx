import React from "react";

const RacingLine = ({
  width = "100%",
  height = 200,
  color = "#000",
  className = "",
}) => {
  return (
    <svg
      viewBox="0 0 25200 200"
      width={width}
      height={height}
      fill={color}
      role="separator"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <g>
        <path d="M200 0h128l-200 200h-128Z" />
        <path d="M344 0h25000v91h-25091Z" />
        <path d="M144 200h25200v-97h-25103Z" />
      </g>
    </svg>
  );
};

export default RacingLine;
