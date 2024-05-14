
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
            <label htmlFor="markComplete" className="mr-1 font-bold">Mark Complete</label>
            <input type="checkbox" id="markComplete" onChange={markCompleteHandler} className="form-checkbox h-4 w-4 text-blue-500 rounded mr-5 mb-5"/>
            <button onClick={deleteHandler} className='button_primary'>Delete Task</button>
        </div>
        </div>
    );
}
