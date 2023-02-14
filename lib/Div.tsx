import "./test.css?raw";
import moduleStyles from "./Div.module.css";

export function Div() {
  return (
    <div className={moduleStyles.div}>
      Div
      <button>ok</button>
    </div>
  );
}
