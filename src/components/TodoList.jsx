import React from "react";
import "../styles/main.css";
import "../styles/corner.css";

function TodoList({ tasks, removeTask }) {
    return (
        <div id="myUnOrdList">
            <ul className="todo-list">
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => removeTask(index)} className="remove-btn">
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
