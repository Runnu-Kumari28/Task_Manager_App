import React from 'react';
import image from '../Resources/display-task.jpg'

export default function About() {

    return(
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-start" >
            <div className=" w-full p-6 bg-white rounded-lg shadow-md" style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}>
                <h1 className="text-2xl font-bold mb-4">Task Manager App Flow</h1>
                <p className="text-gray-900 mb-4">
                Welcome to the Task Manager application! Here's how you can manage your tasks efficiently:
                </p>

            
                <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Adding Tasks</h2>
                <p className="text-gray-900">
                    To add a new task, click on the <strong>"Create-Task"</strong> in the navigation bar. This will open a form where you can input the details of your task such as <strong>Title, Description, Priority and Due-Date</strong> Then Click on <strong>Add-Task</strong>
                </p>
                </div>

                
                <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Viewing and Managing Tasks</h2>
                <p className="text-gray-900">
                    After adding tasks, navigate to the <strong>"Disply-Task"</strong>. Here, you'll see a list of all your tasks. You can mark tasks as <strong>completed or delete tasks</strong>, and also filter them based on their completion status-<strong>"All, Completed or Pending".</strong>
                </p>
                </div>

                
                <div>
                <h2 className="text-lg font-semibold mb-2">Task Component</h2>
                <p className="text-gray-900 mb-4">
                    Each task is displayed as a card, showing the task name, description, and options to markComplete or delete the task.
                </p>
                <div className="bg-gray-200 p-4 rounded-lg shadow-md w-full sm:w-96">
                    <h3 className="text-lg font-semibold mb-2">Task Name</h3>
                    <p className="text-gray-900 mb-2">Title: "Morning Run"
                        <p>Description: "Start your day with an energizing morning run. 
                            Lace up your shoes, 
                            hit the pavement, 
                            and enjoy the refreshing outdoor air as you jog through your neighborhood.
                        </p>
                        </p>
                    <div className="flex justify-between">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">markComplete <input type="checkbox"/></button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Delete</button>
                    </div>
                </div>
                </div>
            </div>
    </div>
    )
};