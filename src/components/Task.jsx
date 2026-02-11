import '../components/Task.css';
import { useState } from 'react';
function Task({ task, toggleCheckbox, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing) {
      // to save the text
      editTask(task.id, editText);
    }
    // editing
    setIsEditing(!isEditing);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // avoid reloading
    handleEdit(); // save and edit
  };
  return (
    <div key={task.id} className="task">
      <input
        // add a checkbox
        type="checkbox"
        checked={task.completed}
        onChange={(event) => toggleCheckbox(task.id, event.target.checked)}
      />
      {isEditing ? (
        <form onSubmit={handleSubmit} style={{ display: 'inline' }}>
          <input
            className="edit-input"
            type="text"
            value={editText}
            onChange={(event) => setEditText(event.target.value)}
          />
        </form>
      ) : (
        task.text
      )}
      <button className="edit-btn" onClick={handleEdit}>
        {' '}
        {isEditing ? '✔' : '✎'}
      </button>
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
    </div>
  );
}
export default Task;
