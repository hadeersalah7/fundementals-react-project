import { useState } from "react";
import Form from "./components/Form";
import { nanoid } from "nanoid"
import Items from "./components/Items";
import { ToastContainer, toast } from 'react-toastify';

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items))
}
const getLocalStorage = JSON.parse(localStorage.getItem("list") || '[]')

const App = () => {
  const [items, setItems] = useState(getLocalStorage)


  const addItems = (itemName) => {
    const newItems = {
      name: itemName,
      id: nanoid(),
      completed: false
    }
   const newList = [...items, newItems]
   setItems(newList)
   setLocalStorage(newList)
   toast.success("Item added successfully!")
  }

  const removeItem = (itemId) => {
    const newItem = items.filter((item) => item.id != itemId)
    setItems(newItem)
    setLocalStorage(newItem)
    toast.success("Item deleted!")
  }

  const editItem = (itemId) => {
    const newItems = items.map((item)=> {
      if(item.id === itemId) {
        const newItem = {...item, completed: !item.completed}
        return newItem
      }
      return item
    })
    setItems(newItems)
    setLocalStorage(newItems)
  }
  return <section className="section-center">
    <ToastContainer position="top-center"/>
    <Form addItems={addItems} />
    <Items items={items} removeItem={removeItem} editItem={editItem}/>
  </section>;
};

export default App;
