import { useState } from "react";

const TodoList = (props) => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <p>Todos to do : </p>
    </div>
  );
};

export default TodoList;
