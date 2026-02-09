import { useState } from 'react';
import todoData from '/todo.json';
import List from './components/List';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import About from './pages/About';

function App() {
  // State for all the tasks
  const [tasks, setTasks] = useState(todoData);

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
  const editTask = (idClicked, editText) => {
    setTasks(
      tasks.map((task) =>
        task.id === idClicked ? { ...task, text: editText } : task,
      ),
    );
  };

  return (
    <div className="main-content">
      <Navbar />
      <Sidebar>
        <About />
      </Sidebar>
      <h1>My Todo App</h1>
      <List
        tasks={tasks}
        addTask={addTask}
        toggleCheckbox={toggleCheckbox}
        deleteTask={deleteTask}
        editTask={editTask}
      />
      <Footer />
    </div>
  );
}

export default App;
