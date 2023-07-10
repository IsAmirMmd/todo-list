import { useState } from "react";

const TodoFrom = (props) => {
  const [todo, setTodo] = useState("");

  const changeHandler = (e) => {
    setTodo(e.target.value);
    console.log(todo);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodo("");
    props.addTodoHandler(todo);
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" onChange={changeHandler} value={todo} />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoFrom;
