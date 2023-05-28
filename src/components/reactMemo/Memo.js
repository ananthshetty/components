import { useState } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";

export default function Memo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  window.alert('rendered from Memo');
  return (
    <>
      <div className="flex flex-col">
      <Todos todos={todos} />
      <hr />
        <p>Count: {count}</p>
        <button onClick={increment} className="w-[100px] h-[20px] bg-slate-400 text-white my-10">+</button>
      </div>
    </>
  );
};
