import React from "react";

export const Grid = ({ children }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
      gridGap: "20px"
    }}
  >
    {children}
  </div>
);

export default Grid;
