import { useState } from "react";
import style from "./Button.module.css";

export function Button() {
  let [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount((count) => count + 1)}
      className={style.button}
    >
      Count is {count}
    </button>
  );
}
