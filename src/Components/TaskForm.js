import React from 'react';
import icon1 from '../Resources/taskForm_icon.png';

export default function TaskForm() {
    return (
        <div className='flex flex-wrap items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500 p-8 rounded-lg shadow lg:h-1/2 lg:w-1/2 lg:m-auto mt-5 lg:mt-5'>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Task-Form</h5>
            <div className="container mx-auto flex flex-wrap flex-col md:flex-row p-2 items-center">
                <div className='flex items-center justify-center bg-gray-300 border border-gray-500 rounded-lg shadow md:flex-row md:max-w-xl lg:w-1/2'>
                    <div className='flex flex-col justify-between p-4 leading-normal gap-4'>
                        <label htmlFor="title">Add Task Title:</label>
                        <input type="text" id="title" name="title" required></input>
                        <label htmlFor="description">Add Description:(optional)</label>
                        <textarea id="description" name="description"></textarea>
                        <label htmlFor="priority">Select Priority:(optional)</label>
                        <select id="priority" name="priority">
                            <option value="">Select Priority</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                        <label htmlFor="dueDate">Due Date:(optional)</label>
                        <input type="date" id="dueDate" name="dueDate"></input>
                        <button className='button_primary'>Add/Edit</button>
                    </div>
                </div>
                <div className="lg:w-1/2 flex justify-center mt-4 lg:mt-0">
                    <img src={icon1} alt="image_Task" className=''></img>
                </div>
            </div>
        </div>
    );
}
