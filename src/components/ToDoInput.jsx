import { useRef } from "react";
import { IoIosAddCircle } from "react-icons/io";
/* eslint-disable react/prop-types */
const ToDoInput = ({addNewItem}) => {
 

 const todoNameElement=useRef();
 const dueDateElement=useRef();


 const handleAddButtonClicked = (event)=>{
  event.preventDefault();
  const itemName=todoNameElement.current.value;
  const itemDate=dueDateElement.current.value;
  todoNameElement.current.value="";
  dueDateElement.current.value="";
  addNewItem(itemName,itemDate);
  
 }


  return (
    <div className="row">
    <div className="col-6"
    ><input type="text" placeholder="Enter Todo Items" ref={todoNameElement} 
    ></input></div>
    <div className="col-4"><input type="date"  ref={dueDateElement} 
    ></input></div>
    <div className="col-2"><button  className="btn btn-success rish-button" onClick={handleAddButtonClicked}><IoIosAddCircle /></button></div>
  </div>
  )
}
export default ToDoInput;