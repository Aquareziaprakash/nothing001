import React, { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import "./styles/main.css";
import "./styles/corner.css";

function App() {
  const [tasks, setTasks] = useState([]); // State for tasks
  const [theme, setTheme] = useState("standard-theme"); // State for theme

  const addTask = (task) => {
    if (task.trim()) {
      setTasks([...tasks, task]);
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const changeTheme = (theme) => {
    setTheme(theme);
  };

  return (
    <div className={`App ${theme}`}>
      <Header changeTheme={changeTheme} />
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} removeTask={removeTask} />
      <Footer />
    </div>
  );
}




export default App;
