import Blocks from './Blocks';
import './List.css';

function List({ tasks, addTask, toggleCheckbox, deleteTask }) {
  return (
    <div className="container">
      <Blocks
        category="Urgent"
        placeholder="To be done first..."
        tasks={tasks}
        addTask={addTask}
        toggleCheckbox={toggleCheckbox}
        deleteTask={deleteTask}
      />
      <Blocks
        category="Important"
        placeholder="To not forget..."
        tasks={tasks}
        addTask={addTask}
        toggleCheckbox={toggleCheckbox}
        deleteTask={deleteTask}
      />
      <Blocks
        category="Extra"
        placeholder="..."
        tasks={tasks}
        addTask={addTask}
        toggleCheckbox={toggleCheckbox}
        deleteTask={deleteTask}
      />
      <Blocks
        category="Perso"
        placeholder="..."
        tasks={tasks}
        addTask={addTask}
        toggleCheckbox={toggleCheckbox}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default List;
