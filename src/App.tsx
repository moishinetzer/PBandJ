import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "./stories/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        {/* The Reusable Button */}
        <Button
          onClick={() => setCount((count) => count + 1)}
          label="Click ME"
          backgroundColor="#9be0ae"
          primary={false}
          size="large"
        />

        <br />
        <br />
        <p>Count: {count}</p>
      </div>
    </div>
  );
}

export default App;
