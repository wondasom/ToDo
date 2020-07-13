import React from "react";
import ToDoList from "./ToDoList";
import "./styles.css";

export default function App() {
	return (
		<div className='wrapper'>
			<h1>To Do List</h1>
			<ToDoList />
		</div>
	);
}
