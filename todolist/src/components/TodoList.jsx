import Todo from "./Todo";
import { useState } from "react";
import TodoFrom from "./TodoForm";

const TodoList = ({ todos, onComplete, onDelete, onUpdate }) => {
  const [edit, setEdit] = useState({ id: null, input: "", isCompleted: false });

  const submitHandler = (newValue) => {
    onUpdate(edit.id, newValue);
    setEdit({ id: null, input: "", isCompleted: false });
  };

  const renderTodos = () => {
    if (todos.length === 0) return <div>add new todo !</div>;
    return todos.map((todo) => {
      return (
        <Todo
          todo={todo}
          key={todo.id}
          onComplete={() => onComplete(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onEdit={() => setEdit(todo)}
        />
      );
    });
  };

  return (
    <div>
      <div>
        {edit.id  ? "" : "Todos to do :"}
        {edit.id ? (
          <TodoFrom addTodoHandler={submitHandler} edit={edit} />
        ) : (
          renderTodos()
        )}
        {edit.id ? "update first to watch todos...!" : ""}
      </div>
    </div>
  );
};

export default TodoList;
