/* eslint-disable react/prop-types */
import { MdDeleteForever } from "react-icons/md";
const ToDoItems = ({todoName,todoDate,onDeleteClick}) => {

  return (
    <div className="row rish-row">
    <div className="col-6">{todoName}</div>
    <div className="col-4">{todoDate}</div>
    <div className="col-2"><button className="btn btn-danger rish-del rish-button" onClick={()=>onDeleteClick(todoName)}><MdDeleteForever /></button></div>
  </div>
  )
}
export default ToDoItems;