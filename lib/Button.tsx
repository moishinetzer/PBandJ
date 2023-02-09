import style from "./Button.module.css";
import { welcomeMessage } from "./utils";

export function Button() {
  return (
    <button className={style.button}>
      {welcomeMessage("Adam")} This is the pbandj button
    </button>
  );
}
