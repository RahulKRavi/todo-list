import React from "react";
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import AddTask from "./components/AddTask.js";
import TaskList from "./components/TaskList.js"

let todoId = 0;

const AppLayout = () => {
    const [todos,setTodos] = useState([])

    function onAddTask(name){
        todoId++
        setTodos(
            [...todos,
                {
                    id:todoId,
                    name:name
                }
            ]
        )
    }

    function onSaveTask(nextToDo){
        setTodos(todos.map(item=>{
            if(item.id===nextToDo.id){
                return nextToDo
            } else {
                return item;
            }
        })
        )
    }

    function onDeleteTask(itemId){
        setTodos([
            ...todos.filter(i=>i.id!==itemId)
        ])
    }

    return (
        <div className="bg-slate-400 m-4 h-40">
            <AddTask onAddTask={onAddTask}/>
            <TaskList todos={todos} onSaveTask={onSaveTask} onDeleteTask={onDeleteTask}/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(<AppLayout/>)