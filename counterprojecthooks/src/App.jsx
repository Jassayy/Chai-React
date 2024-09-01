import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Chai , Jas aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>ADD VALUE</button>
      <br />
      <button onClick={removeValue}>REMOVE VALUE</button>
    </>
  );
}

export default App;
