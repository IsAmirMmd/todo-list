const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <div key={todo.id} className={`TodoContainer`}>
      <p className={todo.isCompleted ? "completed" : ""}>{todo.input}</p>
      <div className="buttonBox">
        <button onClick={onEdit}>edit</button>
        <button onClick={onComplete}>{todo.isCompleted ? "✕" : "✓"}</button>
        <button onClick={onDelete}>delete</button>
      </div>
    </div>
  );
};

export default Todo;
