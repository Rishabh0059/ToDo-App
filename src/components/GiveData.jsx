/* eslint-disable react/prop-types */
import { TodoItemsContext } from "../store/todo-items-store";
import ToDoItems from "./ToDoItems";
import {useContext} from "react";
const GiveData = () => {
const {items,deleteItem}=useContext(TodoItemsContext);
  return (
    <div className="items-container">
      {items.map((item) => (
         <ToDoItems key={item} todoName={item.name} todoDate={item.date} onDeleteClick={deleteItem}></ToDoItems>
      ))}
    </div>
  )
}
export default GiveData;