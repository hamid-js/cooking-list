import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onRemoveItem, onCheck ,onClearHandler }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  // if (sortBy === "description")
  //   sortedItems = items
  //     .slice()
  //     .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items.slice().sort((a, b) => +a.packed - +b.packed);
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            onRemoveItem={onRemoveItem}
            item={item}
            onCheck={onCheck}
            key={item.id}
          />
        ))}
      </ul>
      <div className="action">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          {/* <option value="description">  ترتیب براساس توضیحات </option> */}
          <option value="packed">ترتیب براساس وضعیت </option>
          <option value="input">  ترتیب براساس تاریخ </option>
        </select>
        <button onClick={onClearHandler}> پاک سازی لیست</button>
      </div>
    </div>
  );
}
