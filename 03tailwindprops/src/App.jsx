import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 p-4 rounded-3xl mb-5">tailwind test </h1>
      <Card username="first" btn="touch"/>
      <Card username="second" btn="hold"/>
    </>
  );
}

export default App;
