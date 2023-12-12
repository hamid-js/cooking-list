import { useState } from "react";
import "./App.css";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function addItemHandler(newItem) {
    setItems((pre) => [...pre, newItem]);
  }

  function removeHanler(id) {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  }

  function checkBoxHandler(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearHandler() {
    const confirmed = window.confirm(
      "are you sure you want to delete all items? "
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={addItemHandler} />
      <PackingList
        onRemoveItem={removeHanler}
        onClearHandler={clearHandler}
        items={items}
        onCheck={checkBoxHandler} />
        
      <Stats items={items} />
    </div>
  );
}
