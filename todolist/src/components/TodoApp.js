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

  const onUpdate = (id, value) => {
    const findTodoID = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[findTodoID] };
    selectedTodo.input = value;
    const udpatedTodo = [...todos];
    udpatedTodo[findTodoID] = selectedTodo;
    setTodos(udpatedTodo);
  };

  return (
    <div className="parentConatiner">
      <h1 className="TodoTitle">Todo List - AmirMmd</h1>
      <div className="container">
        <TodoFrom addTodoHandler={addTodoHandler} />


        <TodoList
          todos={todos}
          onComplete={onComplete}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      </div>
    </div>
  );
};

export default TodoApp;
