export default function Item({ item, onRemoveItem, onCheck }) {
  const { packed, id, description, count } = item;
  // const enWord = /^[a-zA-Z]+$/.test(description);
  // console.log("Item ~ lang:", enWord)
  

  return (
    <li>
      <span className="description" style={packed ? { textDecoration: "line-through", color: "green" } : {}}>
        <input
          className={packed ? "packed" : ""}
          style={{ margin: "10px" }}
          type="checkbox"
          value={packed}
          onChange={() => onCheck(id)}
        />


        <span  style={{
            backgroundColor: "#fcfcfc",
           
            padding: "8px 8px",
         
            fontWeight: "bold",
          
          }}>{  `${description} ⬅️  تعداد ${count} `}</span>

       
       
      </span>
      <button onClick={() => onRemoveItem(id)}>❌</button>
    </li>
  );
}
