import React, {useState} from "react";
import Showtaskanddate from "./Showtaskanddate";
import Edit from "./Edit";
import "./Show.css";


const Show =(props)=>{
    const [editTag , setEditTag]= useState(false);
    // const [ isComolete , setisComolete] = useState("")
// console.log(props)
    
const editTagHandler =(tag)=>{
    setEditTag(tag);
}
// console.log(props.isCompelete)

    
    return(
        <div className={"item " + (props.isCompelete ===true  ? "greenBackground" : "blueBackground")}>
            {/* className={"btn-group pull-right " + (this.props.showBulkActions ? 'show' : 'hidden')}   */}
            { !editTag && <Showtaskanddate 
            text={props.text}
            date={props.date}
            id ={props.id}
            isCompelete={props.isCompelete}
            onEditTagHandler={editTagHandler}
            onRemove={props.onRemove}
            onCompleteTask={props.onCompleteTask}
            />}


            {editTag && <Edit id={props.id} text={props.text} date={props.date} onUpdate={props.onUpdate}/>}
            
            

        </div>
    )
}
export default Show;