import { useEffect, useRef, useState } from "react";

const TodoFrom = (props) => {
  const [todo, setTodo] = useState(props.edit ? props.edit.input : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setTodo(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!todo) {
      alert("enter todo !");
      return;
    }

    setTodo("");
    props.addTodoHandler(todo);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        onChange={changeHandler}
        value={todo}
        placeholder={props.edit ? "udpate todo ..." : "add new todo"}
        ref={inputRef}
      />
      <button type="submit">{props.edit ? "Udpate" : "Add"}</button>
    </form>
  );
};

export default TodoFrom;
