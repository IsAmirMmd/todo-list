const Todo = ({ todo, onComplete }) => {
  return (
    <div key={todo.id} className={`TodoContainer`}>
      <p className={todo.isCompleted ? "completed" : ""}>{todo.input}</p>
      <div className="buttonBox">
        <button>edit</button>
        <button onClick={onComplete}>{todo.isCompleted ? "✕" : "✓"}</button>
      </div>
    </div>
  );
};

export default Todo;
