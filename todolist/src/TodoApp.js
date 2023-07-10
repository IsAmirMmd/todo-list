import TodoFrom from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  return (
    <div className="container">
      <h3 className="TodoTitle">Todo List - AmirMmd</h3>

      <TodoFrom />

      <TodoList />
    </div>
  );
};

export default TodoApp;
