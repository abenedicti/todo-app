import { useState } from 'react';
import todoData from '/todo.json';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import About from './pages/About';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  // State for all the tasks
  const [tasks, setTasks] = useState(todoData);
  // burger menu
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setSidebarOpen(!sidebarOpen);
  };

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
      <Navbar toggleBurgerMenu={toggleBurgerMenu} />
      <Sidebar isOpen={sidebarOpen} toggleBurgerMenu={toggleBurgerMenu} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              tasks={tasks}
              addTask={addTask}
              toggleCheckbox={toggleCheckbox}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
