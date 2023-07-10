import { useEffect, useState } from "react";
import TodoFrom from "./TodoForm";
import TodoList from "./TodoList";
import Navbar from "../Navbar/Navbar";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedOption, setSelectedOption] = useState("All");

  useEffect(() => {
    filterTodoList(selectedOption.value);
  }, [todos, selectedOption]);

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

  const filterTodoList = (category) => {
    if (category === "done") {
      setFilteredTodos(todos.filter((todo) => todo.isCompleted));
    } else if (category === "not") {
      setFilteredTodos(todos.filter((todo) => !todo.isCompleted));
    } else {
      setSelectedOption("All");
      setFilteredTodos(todos);
    }
  };

  const selectHandler = (event) => {
    setSelectedOption(event);
    filterTodoList(event.value);
  };

  return (
    <div className="parentConatiner">
      <h1 className="TodoTitle">Todo List - AmirMmd</h1>
      <div className="container">
        <Navbar
          number={
            todos.length - todos.filter((todo) => todo.isCompleted).length
          }
          selectedOption={selectedOption}
          onChange={selectHandler}
        />
        <TodoFrom addTodoHandler={addTodoHandler} />

        <TodoList
          todos={filteredTodos}
          onComplete={onComplete}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      </div>
    </div>
  );
};

export default TodoApp;
