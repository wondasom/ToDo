import React from "react";

const Task = ({ text, isDone, onToggleClick, onRemoveClick }) => {
  return (
    <li className="list">
      <h2>
        {isDone ? "✔️" : "🕖"} {text}
      </h2>
      <br />
      <div className="buttonWrapper">
        <button onClick={() => onToggleClick(text)}>Toggle</button>
        <button onClick={() => onRemoveClick(text)}>Remove</button>
      </div>
    </li>
  );
};

export default Task;
