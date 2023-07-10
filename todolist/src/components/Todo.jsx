const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <div key={todo.id} className={`TodoContainer`}>
      <p className={todo.isCompleted ? "completed" : ""}>{todo.input}</p>
      <div className="buttonBox">
        <button onClick={onEdit} className="btn edit">
          edit
        </button>
        <button onClick={onComplete} className="btn check">
          {todo.isCompleted ? "✕" : "✓"}
        </button>
        <button onClick={onDelete} className="btn delete">
          delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
