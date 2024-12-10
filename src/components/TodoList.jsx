import React, { useState, useEffect } from "react";
import "../styles/main.css";
import "../styles/corner.css";

function TodoList() {
    const [tasks, setTasks] = useState([]);

    // Load todos from local storage on component mount
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todos"));
        if (storedTodos) {
            setTasks(storedTodos);
        }
    }, []);

    // Save todos to local storage when tasks change
    useEffect(() => {
        if (tasks.length > 0) {
            localStorage.setItem("todos", JSON.stringify(tasks));
        }
    }, [tasks]);

    // Handle delete and check actions
    function deleteCheck(event) {
        const item = event.target;

        // Delete item
        if (item.classList.contains('delete-btn')) {
            const itemToDelete = item.parentElement;
            itemToDelete.classList.add("fall");

            // Removing from local todos
            removeLocalTodos(itemToDelete);

            // Directly remove the task without relying on the transitionend event
            setTimeout(() => {
                itemToDelete.remove();
            }, 300); // wait for the animation to complete
        }

        // Check item
        if (item.classList.contains('check-btn')) {
            item.parentElement.classList.toggle("completed");
            updateLocalTodo(item.parentElement);
        }
    }

    // Remove item from tasks state
    function removeTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    // Remove task from local storage
    function removeLocalTodos(item) {
        const itemText = item.innerText.replace('Remove', '').trim();
        const updatedTodos = tasks.filter(todo => todo.text !== itemText);
        setTasks(updatedTodos);
    }

    // Update the 'completed' status in local storage
    function updateLocalTodo(item) {
        const itemText = item.innerText.replace('✔', '').replace('Remove', '').trim();
        const updatedTodos = tasks.map(todo =>
            todo.text === itemText ? { ...todo, completed: !todo.completed } : todo
        );
        setTasks(updatedTodos);
    }

    // Add new task to the list
    function saveLocal(todoText) {
        const newTask = {
            text: todoText,
            completed: false
        };
        const updatedTodos = [...tasks, newTask];
        setTasks(updatedTodos);
    }

    return (
        <div id="myUnOrdList">
            <ul className="todo-list" onClick={deleteCheck}>
                {tasks.length === 0 ? (
                    <li>No tasks available. Add a new one!</li>
                ) : (
                    tasks.map((task, index) => (
                        <li key={index} className={task.completed ? "completed" : ""}>
                            <button className="check-btn">✔</button>
                            {/* Render only the task text, not the entire task object */}
                            {task.text}
                            <button onClick={() => removeTask(index)} className="delete-btn">
                                Remove
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default TodoList;
