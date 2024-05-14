
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header.js';
import About from "./Components/About.js";
import TaskForm from './Components/TaskForm.js';
import Tasklist from "./Components/Tasklist.js";

function App() {
    const [inputText, setInputText] = useState("");
    const [description, setDescription] = useState(""); 
    const [priority, setPriority] = useState(""); 
    const [dueDate, setDueDate] = useState("");
    const [task, setTasks] = useState([]);
    const [status, setStatus] = useState('all');
    const [filterTasks, setFilteredTasks] = useState([]);

    useEffect(() => {
        filterHandler();
    }, [task, status]);

    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setFilteredTasks(task.filter(everytask => everytask.completed === true))
                break;
            case 'pending':
                setFilteredTasks(task.filter(everytask => everytask.completed === false))
                break;
            default:
                setFilteredTasks(task);
                break;
        }
    }

    const submitTaskHandler = (e) => {
        e.preventDefault();
        setTasks([
            ...task, {
                text: inputText,
                description: description,
                priority: priority,
                dueDate: dueDate,
                completed: false,
                id: Math.random() * 1000
            }
        ])
        setInputText("");
        setDescription("");
        setPriority("");
        setDueDate("");
    };

    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/taskform" element={<TaskForm
                        inputText={inputText}
                        setInputText={setInputText}
                        description={description}
                        setDescription={setDescription}
                        priority={priority}
                        setPriority={setPriority}
                        dueDate={dueDate}
                        setDueDate={setDueDate}
                        task={task}
                        setTasks={setTasks} />} />
                    <Route exact path="/tasklist" element={<Tasklist task={task} setTasks={setTasks} setStatus={setStatus} filterTasks={filterTasks} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
