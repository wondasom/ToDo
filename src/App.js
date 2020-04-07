import React from "react";
import TodoList from "./TodoList";
import "./styles.css";

export default function App() {
  return (
    <div className="wrapper">
      <h1>To Do List</h1>
      <TodoList />
    </div>
  );
}
