import { useState } from "react";
import style from "./Button.module.css";

type ButtonProps = {
  type: "primary" | "secondary";
  size: "small" | "medium" | "large";
};
export function Button({ type, size }: ButtonProps) {
  let [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount((count) => count + 1)}
      className={"bg-blue-400"}
    >
      Count is {count}
    </button>
  );
}
