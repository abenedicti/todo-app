import { useState } from 'react';
function Task({ task, toggleCheckbox, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing) {
      // On sauvegarde le texte
      editTask(task.id, editText);
    }
    // On bascule le mode édition dans tous les cas
    setIsEditing(!isEditing);
  };

  return (
    <p key={task.id}>
      <input
        // add a checkbox
        type="checkbox"
        checked={task.completed}
        onChange={(event) => toggleCheckbox(task.id, event.target.checked)}
      />
      {isEditing ? (
        <input
          className="edit-input"
          type="text"
          value={editText}
          onChange={(event) => setEditText(event.target.value)}
        />
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
    </p>
  );
}
export default Task;
