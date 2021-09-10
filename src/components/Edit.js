import React, {useState} from "react";
import "./Edit.css"

const Edit=(props)=>{
    const [editInputValue , setEditInputValue]= useState(
        {
            text : "",
            date : "",
            id: props.id,
            isCompelete : false,
        }
    );

    const taskValueHandler=(event)=>{
        setEditInputValue( (prevState)=>{return {...prevState ,text: event.target.value}})
    }
    const dateValueHandler=(event)=>{
        setEditInputValue((prevState)=>{return{...prevState ,date: new Date(event.target.value)}})
    }

    const editButtonHandler=(event)=>{
        event.preventDefault();
         if (editInputValue.text.length === 0 || editInputValue.date.length === 0) {
             return
         }
        props.onUpdate(editInputValue )
    }
    
    return(
        <form  onSubmit={editButtonHandler} className="editContainer">
            <div>
            <label>task</label>
            <input onChange={taskValueHandler} placeholder={props.text}/>
            </div>
            <div>
            <label>date</label>
            <input type="date" onChange={dateValueHandler} placeholder={props.date}/>
            </div>
            <button > add task</button>
        </form>

    )
}
export default Edit;