import React from "react";
import ReactDOM from 'react-dom/client';
import AddTask from "./components/AddTask.js";
import TaskList from "./components/TaskList.js"

const AppLayout = () => {
    return (
        <>
            <AddTask />
            <TaskList />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(<AppLayout/>)