import React from 'react';
import { useNavigate } from 'react-router-dom';
import About from './About';
import TaskForm from './TaskForm';
import Tasklist from './Tasklist';
 
export default function Header() {
const navigate = useNavigate();

const handle_About = () => {
    navigate('/About');
}

const handle_CreateTask = () => {
    navigate('/TaskForm')
}

const handle_Tasklist = () => {
    navigate('/Tasklist')
}
    return (
    <div className="container bg-slate-900  mx-auto flex flex-wrap flex-col md:flex-row p-2 items-center text-grey">
        <a className= "flex title-font font-medium items-center mb-4"> 
        <h1 className='text-xl text-white ml-2 md:ml-auto md:mr-auto'>Task_Manager</h1>  
        </a>
        <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base text-white justify-center">
            <button onClick={handle_About} className='button_primary'>About</button>
            <button onClick={handle_CreateTask} className='button_primary'>Create-Task</button>
            <button onClick={handle_Tasklist} className='button_primary'>Display-Task</button>    
        </div>
        <button className='button_primary'>Login/Register</button>
    </div>
    )
};