import { useState, Fragment } from "react";

export default function ComponentList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  return (
    <>
      <ul>
        {items.map((item, i) => {
          return (
            <Fragment key={item}>
              <li>{item}</li>
              <li>Test</li>
            </Fragment>
          );
        })}
      </ul>
      <input
        type={"text"}
        value={newItem}
        onChange={(event) => setNewItem(event.target.value)}
      />
      <button
        onClick={() => {
          setItems([...items, newItem]);
          setNewItem("");
        }}
      >
        Add List Item
      </button>
    </>
  );
}
