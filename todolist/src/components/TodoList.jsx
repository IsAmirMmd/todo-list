import Todo from "./Todo";
import { useState } from "react";

const TodoList = ({ todos }) => {
  const renderTodos = () => {
    if (todos.length === 0) return <div>add new todo !</div>;
    return todos.map((todo) => {
      return <Todo todo={todo} key={todo.id} />;
    });
  };

  return (
    <div>
      <p>Todos to do : </p>
      {renderTodos()}
    </div>
  );
};

export default TodoList;
