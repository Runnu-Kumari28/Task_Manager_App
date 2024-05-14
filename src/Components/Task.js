
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
        <div className="lg:justify-start gap-4">
            <div className="rounded-lg shadow-md p-6 mb-4 bg-gradient-to-br from-purple-300 to-purple-500 w-80 lg:w-64">
            <li className={`${eachTask.completed ? "completedTask" : ""}`}>
                <strong className="block mb-1">Title:</strong><span className="text-gray-800">{eachTask.text}</span><br />
                <strong className="block mb-1">Description:</strong><span className="text-gray-800">{eachTask.description}</span><br />
                <strong className="block mb-1">Priority:</strong><span>{eachTask.priority}</span><br />
                <strong className="block mb-1">Due Date:</strong><span>{eachTask.dueDate}</span><br />
            </li>
            <button onClick={markCompleteHandler} className='button_primary'>Mark Complete</button>
            <button onClick={deleteHandler} className='button_primary'>Delete Task</button>
        </div>
        </div>
    );
}
