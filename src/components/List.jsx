import Blocks from './Blocks';
import './List.css';

function List({ tasks, addTask, toggleCheckbox, deleteTask, editTask }) {
  return (
    <div className="container">
      <Blocks
        category="Urgent"
        placeholder="To be done first..."
        tasks={tasks}
        addTask={addTask}
        toggleCheckbox={toggleCheckbox}
        deleteTask={deleteTask}
        editTask={editTask}
      />
      <Blocks
        category="Important"
        placeholder="To not forget..."
        tasks={tasks}
        addTask={addTask}
        toggleCheckbox={toggleCheckbox}
        deleteTask={deleteTask}
        editTask={editTask}
      />
      <Blocks
        category="Extra"
        placeholder="..."
        tasks={tasks}
        addTask={addTask}
        toggleCheckbox={toggleCheckbox}
        deleteTask={deleteTask}
        editTask={editTask}
      />
      <Blocks
        category="Perso"
        placeholder="..."
        tasks={tasks}
        addTask={addTask}
        toggleCheckbox={toggleCheckbox}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}

export default List;
