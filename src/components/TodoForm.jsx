import React, { useState } from "react";
import "../styles/main.css";
import "../styles/corner.css";

function TodoForm({ addTask }) {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(task);
        setTask("");
    };

    return (
        <div id="form">
            <form onSubmit={handleSubmit}>
                <input
                    className="todo-input"
                    type="text"
                    placeholder="Add a task."
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button className="todo-btn" type="submit">
                    I Got This!
                </button>
            </form>
        </div>
    );
}

export default TodoForm;
