import React from 'react';
import Task from './Task';
export default function Tasklist({task, setTasks, setStatus, filterTasks}) {
console.log(task);
const statusHandler = (e) => {
    setStatus(e.target.value);
}


    return(
        <div>
            <div>
                <select onChange={statusHandler} id="status" name="status">
                    <option value="">Status</option>
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                </select> 
            </div>
            <ul>
                {filterTasks.map(eachTask => (
                    <Task task={task} setTasks={setTasks} key={eachTask.id} eachTask={eachTask} text={eachTask.text} />
                ))}
            </ul>
        </div>
    )
};