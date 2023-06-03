import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value)); 
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value)); 
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value)); 
  };
 
  function resetInput(e) { 
    e.preventDefault(); 
    Number((inputRef.current.value) = null); 
  }; 
 
  function resetResult(e) { 
  	e.preventDefault(); 
    setResult((result) => 0); 
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <br></br>
        <button onClick={plus}>Add</button> 
        <button onClick={minus}>Subtract</button>
        <button onClick={times}>Multiply</button> 
        <button onClick={divide}>Divide</button> 
        <br></br> 
        <button className="redButton" onClick={resetInput}>Reset Input</button>  
        <button className="redButton" onClick={resetResult}>Reset Result</button>  
      </form> 
    </div> 
  ); 
} 
 
export default App; 
