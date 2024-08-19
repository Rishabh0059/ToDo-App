import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
/* eslint-disable react/prop-types */
const WelcomeMessage = () => {
  const {items}=useContext(TodoItemsContext);
  return ( items.length===0 && 
    
  <p className="welcome-text">No Tasks , Enjoy your Day</p>
  )
}
export default WelcomeMessage;