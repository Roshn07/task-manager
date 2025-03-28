import React, { useState } from "react";

function Task() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTask([...task, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    setTask(task.filter((_, i) => i !== index));
  };

  const toggleCompletion = (index) => {
    setTask(
      task.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="task-container">
      <input
        type="text"
        className="task-input"
        placeholder="enter task"
        value={newTask}
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
      ></input>
      <button onClick={addTask} className="task-button">
        ADD
      </button>
      <ul className="task-list">
        {task.map((task, index) => (
          <li key={index} className="task-item">
            <span
              className={task.completed ? "completed" : ""}
              onClick={() => toggleCompletion(index)}
            >
              {task.text}
            </span>

            <button onClick={() => toggleCompletion(index)}>✔️</button>
            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task;
