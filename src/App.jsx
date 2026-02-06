import { useState } from 'react';
import List from './components/List';

function App() {
  // State for all the tasks
  const [tasks, setTasks] = useState([]);

  // Add a task per category
  const addTask = (text, category) => {
    //  to remove white space if user add nothing
    if (text.trim() === '') return;

    const newTask = {
      id: tasks.length + 1,
      text,
      category,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };
  const toggleCheckbox = (idClicked, boxChecked) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === idClicked) {
          // clone the task and change the completed
          return { ...task, completed: boxChecked };
        }
        return task;
      }),
    );
  };
  const deleteTask = (idClicked) => {
    setTasks(tasks.filter((task) => task.id !== idClicked));
  };

  return (
    <div className="main-content">
      <h1>My Todo App</h1>
      <List
        tasks={tasks}
        addTask={addTask}
        toggleCheckbox={toggleCheckbox}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
