import "./App.css";
import { useCallback, useState } from "react";
import Header from "./components/Header";

function App() {
const [count, setCount] = useState(0);
const increment = useCallback(() => {

  setCount(prevState => prevState + 1);
}, []); 


  return (
    <div className="App">
      <Header increment= {increment} />
      <hr />
      <h1>{count}</h1>
    
    </div>
  );
}


export default App;
