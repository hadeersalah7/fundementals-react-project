import { useState } from "react";
import Form from "./components/Form";
import {nanoid} from "nanoid"
import Items from "./components/Items";
const App = () => {
  const [items, setItems] = useState([])
  const addItems = (itemName) => {
   const newItems = {
     name: itemName,
    id: nanoid(),
    completed: false
   } 
   setItems([...items, newItems])
  }

  const removeItem = (itemId) =>  {}
  return <section className="section-center">
    <Form addItems={addItems}/>
    <Items items={items} removeItem={removeItem}/>
  </section>;
};

export default App;
