import React, {useState} from "react";
import ShowTask from "./components/ShowTask";
import AddTask from "./components/AddTask";


import './App.css';
let arr=[];
function App() {
  const [arrValue , setArrValue]= useState(arr)

  const addToArr=(newItem)=>{
    setArrValue((arrValue)=>{return[...arrValue , {...newItem ,id: Math.random().toString() , isCompelete:false}]})
  }
  const remove=(taskID)=>{
    setArrValue((arrValue)=>{
      const updateRemove = arrValue.filter((tasks)=> tasks.id !== taskID)
      return updateRemove
    })
  }
  const updateTask=(value )=>{
      setArrValue((tasks)=> {
        
        const updateItem = tasks.map((task)=>task.id === value.id ? value : task)
        return updateItem
      })
   }
   const completeTask =(value)=>{
     setArrValue((tasks)=>
     {const updateComplete = tasks.map((task)=> task.id === value.id ? value :task )
     return updateComplete}
     )
   }

   console.log(arrValue)
  return (
    <div className="App">
      <AddTask onAddToArr={addToArr} />
      <ShowTask arrValue={arrValue} onRemove={remove} onUpdate={updateTask} onCompleteTask={completeTask} />
        
    </div>
  );
}

export default App;
