import React from "react";

const Icon = ({ children, active = false, size = 20, onClick }) => {
  return (
    <svg
      onClick={onClick}
      style={{ height: size, width: size }}
      xmlns="http://www.w3.org/2000/svg"
      fill={active ? "black" : "white"}
      viewBox="0 0 24 24"
      stroke={active ? "blue" : "white"}
    >
      {children}
    </svg>
  );
};

export default Icon;
