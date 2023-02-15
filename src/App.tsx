import { Button } from "../lib";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" width="100px" />
        </a>
        <a href="https://github.com/moishinetzer/pbandj" target="_blank">
          <img
            src="/pbandj.png"
            className="logo pbandj"
            alt="PBandJ logo"
            width="200px"
          />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img
            src="/react.svg"
            className="logo react"
            alt="React logo"
            width="100px"
          />
        </a>
      </div>
      <h2>Presents</h2>
      <h1>Vite + React</h1>
      <div className="card">
        <Button size="medium" type="primary" />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the logos to learn more</p>
    </div>
  );
}

export default App;
