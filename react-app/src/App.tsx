import { useState } from "react";
import TodoList from "./components/TodoList";

const App = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const deleteTask = (index: number) => {
    const updateTasks = [...tasks];
    updateTasks.splice(index, 1);
    setTasks(updateTasks);
  };

  return (
    <>
      <h1>Todo List</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={addTask}>
          Add Task
        </button>
      </div>
      <TodoList tasks={tasks} onDelete={deleteTask} />
    </>
  );
};

export default App;
