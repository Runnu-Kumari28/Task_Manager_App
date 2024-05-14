
import React from 'react';

export default function Task({ text, eachTask, task, setTasks }) {
    const deleteHandler = () => {
        setTasks(task.filter(item => item.id !== eachTask.id));
    };

    const markCompleteHandler = () => {
        setTasks(task.map(item => {
            if (item.id === eachTask.id) {
                return { ...item, completed: !item.completed };
            }
            return item;
        }));
    };

    return (
        <div>
            {/* <li className={`${eachTask.completed ? "completedTask" : ""}`}>{text}</li> */}
            <li className={`${eachTask.completed ? "completedTask" : ""}`}>
                <strong>Title:</strong> {eachTask.text}<br />
                <strong>Description:</strong> {eachTask.description}<br />
                <strong>Priority:</strong> {eachTask.priority}<br />
                <strong>Due Date:</strong> {eachTask.dueDate}<br />
            </li>
            <button onClick={markCompleteHandler} className='button_primary'>Mark Complete</button>
            <button onClick={deleteHandler} className='button_primary'>Delete Task</button>
        </div>
    );
}
