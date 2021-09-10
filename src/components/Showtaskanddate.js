import React ,{useState} from "react";
import "./Showtaskanddate.css"
const Showtaskanddate=(props)=>{
    

    const day = props.date.toLocaleString("en-us" , {day :"2-digit"});
    const month = props.date.toLocaleString("en-us" , {month :"long"});
    const year = props.date.getFullYear();


    const editHandler=()=>{
        props.onEditTagHandler(true);
    }
    const deletHandler=()=>{
        props.onRemove(props.id);
    }
    const completeHandler=()=>{
        props.onCompleteTask(
            {
            text:props.text,
            date:props.date,
            id :props.id,
            isCompelete : !props.isCompelete,

        })
    }
    console.log(props.isComplete)
    return(
        <div className="editContainer">
            <div className="container">
            {props.text} 
            <div>{year} { month } {day}</div>
        </div>
        <div>
            <i className="fas fa-pen" onClick={editHandler}></i> 
            <i className="far fa-trash-alt"  onClick={deletHandler}></i>
            <i class="far fa-check-circle" onClick={completeHandler}></i>
        </div>

        </div>
    )
}
export default Showtaskanddate;