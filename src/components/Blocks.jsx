import Task from './Task';
import { useState } from 'react';
import './blocks.css';

function Blocks({
  category,
  placeholder,
  tasks,
  addTask,
  toggleCheckbox,
  deleteTask,
  editTask,
}) {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    addTask(inputValue, category);
    setInputValue('');
  };

  // Condition ternaire pour la classe container
  const blockClass =
    category === 'Extra' || category === 'Perso' ? 'mini-block' : 'big-block';
  const titleClass =
    category === 'Extra' || category === 'Perso' ? 'title-mini' : 'title-big';

  return (
    <div className={blockClass}>
      <h2 className={titleClass}>{category}</h2>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder}
      />

      <button className="add-btn" onClick={handleAdd}>
        Add
      </button>
      <div className="tasks">
        {tasks
          .filter((task) => task.category === category)
          .map((task) => (
            <Task
              key={task.id}
              task={task}
              toggleCheckbox={toggleCheckbox}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          ))}
      </div>
    </div>
  );
}

export default Blocks;
