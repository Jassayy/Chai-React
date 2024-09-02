import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-center bg-orange-400 text-4xl ">
        Currency Convertor
      </h1>
    </>
  );
}

export default App;
