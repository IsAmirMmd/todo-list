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

  const onComplete = (id) => {
    const findTodoID = todos.findIndex((todo) => todo.id === id);

    const selectedTodo = { ...todos[findTodoID] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const udpatedTodo = [...todos];
    udpatedTodo[findTodoID] = selectedTodo;
    setTodos(udpatedTodo);
  };

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <h3 className="TodoTitle">Todo List - AmirMmd</h3>

      <TodoFrom addTodoHandler={addTodoHandler} />

      <TodoList todos={todos} onComplete={onComplete} onDelete={onDelete} />
    </div>
  );
};

export default TodoApp;
