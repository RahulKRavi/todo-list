import { useState } from "react"

export default function AddTask({onAddTask}) {
  const [name,setName] = useState('')
  return (
    <>
      <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
      <button className="bg-green-600" onClick={()=>{
        onAddTask(name)
        setName('')}}>ADD</button>
    </>
  )
}