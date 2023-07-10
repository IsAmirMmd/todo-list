import { useState } from "react";
import TodoFrom from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="container">
      <h3 className="TodoTitle">Todo List - AmirMmd</h3>

      <TodoFrom addTodoHandler={addTodoHandler} />

      <TodoList todos={todos} />
    </div>
  );
};

export default TodoApp;
