import React, { useState } from "react";
import TodoList from "./TodoList";
import InputArea from "./InputArea";

function App() {
  const [items, updateItems] = useState([]);

  function addItems(inputText) {
    updateItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    updateItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onPress={addItems} />
      <div>
        <ul>
          {items.map((listItems, index) => (
            <TodoList
              key={index}
              id={index}
              text={listItems}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
