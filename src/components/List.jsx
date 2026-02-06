/// list of tasks

import { useState } from 'react';
import './List.css';

function List({ tasks, addTask, toggleCheckbox, deleteTask }) {
  // States for each input of each blocs
  const [urgentTasks, setUrgentTasks] = useState('');
  const [importantTasks, setImportantTasks] = useState('');
  const [extraTasks, setExtraTasks] = useState('');
  const [meetingTasks, setMeetingTasks] = useState('');

  return (
    <div className="container">
      <div className="bloc">
        <h2>Urgent</h2>
        <input
          type="text"
          value={urgentTasks}
          // triggered when we are tapping + content
          onChange={(event) => setUrgentTasks(event.target.value)}
          placeholder="To be done first..."
        />
        <button
          onClick={() => {
            addTask(urgentTasks, 'Urgent');
            setUrgentTasks('');
          }}
        >
          Add
        </button>

        {tasks
          .filter((task) => task.category === 'Urgent')
          .map((task) => (
            <p key={task.id}>
              <input
                // add a checkbox
                type="checkbox"
                checked={task.completed}
                onChange={(event) =>
                  toggleCheckbox(task.id, event.target.checked)
                }
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
          ))}
      </div>
      <div className="bloc">
        <h3>Important</h3>
        <input
          type="text"
          value={importantTasks}
          onChange={(event) => setImportantTasks(event.target.value)}
          placeholder="To not forget..."
        />
        <button
          onClick={() => {
            addTask(importantTasks, 'Important');
            setImportantTasks('');
          }}
        >
          Add
        </button>
        {tasks
          .filter((task) => task.category === 'Important')
          .map((task) => (
            <p key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={(event) =>
                  toggleCheckbox(task.id, event.target.checked)
                }
              />
              {task.text}
              {task.completed && (
                <button
                  className="delete-btn"
                  onClick={() => deleteTask(task.id)}
                >
                  {' '}
                  ✖
                </button>
              )}
            </p>
          ))}
      </div>

      <div className="mini-bloc">
        <h4>Extra</h4>
        <input
          type="text"
          value={extraTasks}
          onChange={(event) => setExtraTasks(event.target.value)}
          placeholder="Maybe for another day..."
        />
        <button
          onClick={() => {
            addTask(extraTasks, 'Extra');
            setExtraTasks('');
          }}
        >
          Add
        </button>
        {tasks
          .filter((task) => task.category === 'Extra')
          .map((task) => (
            <p key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={(event) =>
                  toggleCheckbox(task.id, event.target.checked)
                }
              />
              {task.text}
              {task.completed && (
                <button
                  className="delete-btn"
                  onClick={() => deleteTask(task.id)}
                >
                  {' '}
                  ✖
                </button>
              )}
            </p>
          ))}
      </div>

      <div className="mini-bloc">
        <h4>Appointment</h4>
        <input
          type="text"
          value={meetingTasks}
          onChange={(event) => setMeetingTasks(event.target.value)}
          placeholder="Don't be late"
        />
        <button
          onClick={() => {
            addTask(meetingTasks, 'Perso');
            setMeetingTasks('');
          }}
        >
          Add
        </button>
        {tasks
          .filter((task) => task.category === 'Perso')
          .map((task) => (
            <p key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={(event) =>
                  toggleCheckbox(task.id, event.target.checked)
                }
              />
              {task.text}
              {task.completed && (
                <button
                  className="delete-btn"
                  onClick={() => deleteTask(task.id)}
                >
                  {' '}
                  ✖
                </button>
              )}
            </p>
          ))}
      </div>
    </div>
  );
}

export default List;
