import React from "react";
import Show from "./Show";
const ShowTask=(props)=>{
    
    
    
    return(
        <div>
            {props.arrValue.map((task)=><Show 
            key={Math.random().toString()}
            id={task.id}
            text={task.text}
            date={task.date}
            isCompelete ={task.isCompelete}
            onRemove={props.onRemove}
            onUpdate={props.onUpdate}
            onCompleteTask={props.onCompleteTask}
            />
            )}
        </div>
    )
}
export default ShowTask;