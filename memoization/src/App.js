import "./App.css";
import { useMemo, useState } from "react";
import Header from "./components/Header";

function App() {
const [count, setCount] = useState(0);

const [text, setText] = useState("");

const data= useMemo (() => {
  return calculateObject(count);
}, [count]);

// const data =calculateObject();  // this will be called every time the component is re-rendered

  return (
    <div className="App">
      <Header data={data} />
      <hr />
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <input type="text" value={text} onChange={({target})=>{setText(target.value)}} />
    </div>
  );
}

function calculateObject(count) {
  console.log("calculating...");
  for (let i = 0; i < 100000000; i++) {};
  console.log("calculated");
  return { name:"Lütfü" ,count };
}

export default App;
