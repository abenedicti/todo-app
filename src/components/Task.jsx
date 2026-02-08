function Task({ task, toggleCheckbox, deleteTask }) {
  return (
    <p key={task.id}>
      <input
        // add a checkbox
        type="checkbox"
        checked={task.completed}
        onChange={(event) => toggleCheckbox(task.id, event.target.checked)}
      />
      {task.text}

      {task.completed && (
        <button
          // when clicked : delete button appear
          className="delete-btn"
          onClick={() => deleteTask(task.id)}
        >
          {' '}
          ✖
        </button>
      )}
    </p>
  );
}
export default Task;
