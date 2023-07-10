const Todo = ({ todo }) => {
  return (
    <div key={todo.id}>
      <p>{todo.input}</p>
      <div>
        <button>edit</button>
        <button>done</button>
      </div>
    </div>
  );
};

export default Todo;
