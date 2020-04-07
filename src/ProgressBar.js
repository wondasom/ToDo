import React from "react";

const ProgressBar = ({ percentage }) => {
  return (
    <div className="progress-bar">
      <div
        className="bar"
        style={{
          width: `${percentage}%`
        }}
      />
    </div>
  );
};

export default ProgressBar;
