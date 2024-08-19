

import { useState } from "react";
import "./App.css";
import AppName from "./components/AppName";
import GiveData from "./components/GiveData";
import ToDoInput from "./components/ToDoInput";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  
  let intialitems = [
    {
      name : "Buy Milk",
      date : "21/04/24",
    },
    {
      name : "Go To Gym",
      date : "21/04/24",
    },
    {
      name : "Go To College",
      date : "21/04/24",
    },
    {
      name : "Sleep",
      date : "21/04/24",
    }

  ]

  const [items,setItems]=useState(intialitems);
  const addNewItem = (itemName,itemDate) => {
   setItems((currValue)=> [
    ...currValue,
    {name:itemName,date:itemDate}
   ]); 
  }
 const deleteItem = (itemName) =>{
    const newItems = items.filter(item => item.name!==itemName);
    setItems(newItems);
    
  }

  
  return (
    <TodoItemsContext.Provider value={{
      items:items,
      addNewItem:addNewItem,
      deleteItem:deleteItem,
    }}>
      
    <center>
      <AppName></AppName>
      <div className="container">
      <ToDoInput ></ToDoInput>
      <WelcomeMessage></WelcomeMessage>
      <GiveData></GiveData>
      </div>
    </center>
   
    </TodoItemsContext.Provider>
  )
}

export default App
