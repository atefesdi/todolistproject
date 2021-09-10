import React,{useState  } from "react";
import styles from "./AddTask.module.css";

const AddTask=(props)=>{
    const [checkInput , setcheckInput]= useState(true)
    const [inputValues , setInputValues] = useState(
        {taskValue:"",
        dateValue:"",}
    );
    

    const taskValueHandler = (event)=>{

        
        setInputValues((prevState)=>{
            if (event.target.value.trim().length >0) {
                setcheckInput(true)
            }
            return({... prevState , taskValue: event.target.value})})
    }
    const dateValueHandler =(event)=>{
        
        setInputValues((prevState)=>{
            if (event.target.value.trim().length > 0) {
                setcheckInput(true)
            }
            return({... prevState , dateValue: new Date(event.target.value)})})
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        
        

            if (inputValues.taskValue.length ===0 || inputValues.dateValue.length === 0) {
                return
            }
        
       
        props.onAddToArr({
            text: inputValues.taskValue ,
             date:inputValues.dateValue,
            })
    }
    
    return(
        <form onSubmit={submitHandler} className={styles.formStyle}>
            <div>
            <label>task</label>
            <input onChange={taskValueHandler}/>
            </div>
            <div>
            <label>date</label>
            <input type="date" onChange={dateValueHandler} />
            </div>
            <button> add task</button>
        </form>
    )

}
export default AddTask