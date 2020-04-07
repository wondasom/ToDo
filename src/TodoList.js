import React, { useState } from "react";
import _ from "lodash";
import Todo from "./Todo";
import todoData from "./todoData";
import ProgressBar from "./ProgressBar";

const TodoList = () => {
  const [todos, setTodos] = useState(todoData);
  const [newTodoText, setNewTodoText] = useState("");

  const toggleTodo = text => {
    const newTodos = _.cloneDeep(todos);
    const todo = _.find(newTodos, { text });

    // Handling error, if no todo found.
    if (!todo) {
      return;
    }

    todo.isDone = !todo.isDone;
    setTodos(newTodos);
  };

  const addTodo = () => {
    // We return, if the text is empty, or
    // if there's a todo with this text already.
    if (!newTodoText || _.find(todos, { text: newTodoText })) {
      setNewTodoText("");
      return;
    }

    const newTodos = [
      ...todos,
      {
        text: newTodoText,
        isDone: false
      }
    ];

    setTodos(newTodos);
    setNewTodoText("");
  };

  const removeTodo = text => {
    const newTodos = _.reject(todos, { text });
    setTodos(newTodos);
  };

  const getPercentage = () => {
    // We return 100%, instead of dividing by 0. ☝🏼
    // There are no tasks, so we're 100% done!
    if (todos.length === 0) {
      return 100;
    }

    return (_.filter(todos, { isDone: true }).length / todos.length) * 100;
  };

  return (
    <>
      <ProgressBar percentage={getPercentage()} />
      <ul>
        {todos.map(todo => (
          <Todo
            key={todo.text}
            text={todo.text}
            isDone={todo.isDone}
            onToggleClick={toggleTodo}
            onRemoveClick={removeTodo}
          />
        ))}
      </ul>
      <div className="appendToDo">
        <input
          className="input"
          type="text"
          value={newTodoText}
          onInput={e => setNewTodoText(e.target.value)}
        />
        <button className="addButton" onClick={addTodo}>
          Add
        </button>
      </div>
    </>
  );
};

export default TodoList;
