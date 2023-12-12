import { useRef, useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [count, setCount] = useState(1);
  const inputRef = useRef();

  function changeHandler(e) {
    // const lang = /^[\u0600-\u06FF\s]+$/.test(e.target.value);
    // const lang = /^[a-zA-Z]+$/.test(e.target.value);
    // console.log("submitHandler ~ lang:", lang);
    // if (lang ) alert("لطفا فقط از حروف فارسی استفاده کنید") ;
    // if (!lang)
    if(e.target.value.length < 20)  
    setDescription(e.target.value);
  else
  alert("به حداکثر کارکتر مجاز رسیده اید!")
  }
  function submitHandler(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = { description, count, packed: false, id: Date.now() };
    onAddItems(newItem);

    setCount(1);
    setDescription("");
    inputRef.current.focus()
  }

  return (
    <form className="add-form" onSubmit={submitHandler}>
      <h3>برای آشپزی به چه موادی نیاز دارید ؟ 😍</h3>
      <select name="" id="" onChange={(e) => setCount(+e.target.value)} value={count}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input  ref={inputRef} type="text" placeholder="مواد اولیه..."  value={description} onChange={(e) => changeHandler(e) } />
      <button>افزودن</button>
    </form>
  );
}
