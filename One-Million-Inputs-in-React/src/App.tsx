import { useState } from "react";
import "./App.css";
import TheInput from "./components/TheInput";

function App() {
  const [inputs, setInputs] = useState(new Array(1_000).fill(""));

  const abaDaba = (index: number) => (str: string) => {
    setInputs((pre) => pre.map((e, i) => (i === index ? str : e)));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {inputs.map((e, i) => (
        <TheInput value={e} setValue={abaDaba(i)} />
      ))}
    </div>
  );
}

export default App;
