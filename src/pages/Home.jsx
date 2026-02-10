import List from '../components/List';

function Home({ tasks, addTask, toggleCheckbox, deleteTask, editTask }) {
  return (
    <>
      <h1>My Todo App</h1>
      <List
        tasks={tasks}
        addTask={addTask}
        toggleCheckbox={toggleCheckbox}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </>
  );
}

export default Home;
