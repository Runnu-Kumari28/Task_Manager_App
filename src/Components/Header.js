import React from 'react';
 
export default function Header() {

    return (
    <div className="container bg-slate-900  mx-auto flex flex-wrap flex-col md:flex-row p-2 items-center text-grey">
        <a className= "flex title-font font-medium items-center mb-4"> 
        <h1 className='text-xl text-white ml-2 md:ml-auto md:mr-auto'>Task_Manager</h1>  
        </a>
        <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base text-white justify-center">
            <button className='button_primary'>About</button>
            <button className='button_primary'>Create-Task</button>
            <button className='button_primary'>Display-task</button>
            
        </div>
        <button className='button_primary'>Login/Register</button>
    </div>
    )
};