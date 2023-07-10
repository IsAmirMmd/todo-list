import Todo from "./Todo";
import { useState } from "react";

const TodoList = ({ todos, onComplete }) => {
  const renderTodos = () => {
    if (todos.length === 0) return <div>add new todo !</div>;
    return todos.map((todo) => {
      return (
        <Todo
          todo={todo}
          key={todo.id}
          onComplete={() => onComplete(todo.id)}
        />
      );
    });
  };

  return (
    <div>
      <p>Todos to do : </p>
      <div> {renderTodos()}</div>
    </div>
  );
};

export default TodoList;
