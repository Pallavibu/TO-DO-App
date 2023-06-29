import React, { useState } from "react";

function Todoapp() {
  const [itemlist, setitemlist] = useState([]);
  const [items, setItems] = useState("");

  const updateItems = (e) => {
    setItems(e.target.value);
  };

  const AddItem = () => {
    if (items !== "") {
      setitemlist([...itemlist, items]);
      setItems("");
    }
  };
 
  const DeleteItem = (index) => {
    const updatedList = itemlist.filter((_, idx) => idx !== index);
  setitemlist(updatedList);
   };
  return (
    <>
      <h2>Todo App</h2>
      <input
        placeholder="Enter the item"
        value={items}
        type="text"
        onChange={updateItems}
      ></input>

      <button onClick={AddItem}>Add item</button>

      <ul>
        {itemlist.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => DeleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todoapp;
