import { useState } from "react"

export default function TaskList({todos,onSaveTask,onDeleteTask}) {
  return (
    <>
    <ul>
      {todos.map((item)=>(
        <li key={item.id}>
          <Task todo={item} onSaveTask={onSaveTask} onDeleteTask={onDeleteTask}/>
        </li>
      ))}
    </ul>
    </>

  )
}

function Task({todo,onSaveTask,onDeleteTask}) {
  let toDisplay;
  const[isEditing,setIsEditing] = useState(false)
  if(isEditing){
    toDisplay = (
      <>
        <input type="text" value={todo.name} onChange={(e)=>onSaveTask({
          ...todo,
          name:e.target.value
        })
        }></input>
        <button className="bg-yellow-400" onClick={()=>setIsEditing(false)}>SAVE</button>
      </>
    )
  } else {
    toDisplay = (
      <>
        {todo.name}
        <button className="bg-yellow-400" onClick={()=>setIsEditing(true)}>EDIT</button>
      </>

    )
  }
  return (
    <>
      <input type="checkbox"></input>
      {toDisplay}
      <button className="bg-red-700" onClick={()=>onDeleteTask(todo.id)}>DELETE</button>
    </>
  )
}