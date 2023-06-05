import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function one(e) { 
    e.preventDefault(); 
    setResult((result) => null); 
  }; 
  function two(e) { 
    e.preventDefault(); 
    setResult((result) => null); 
  }; 
  function three(e) { 
    e.preventDefault(); 
    setResult((result) => null); 
  }; 
  function four(e) { 
    e.preventDefault(); 
    setResult((result) => null); 
  }; 
  function five(e) { 
    e.preventDefault(); 
    setResult((result) => null); 
  }; 
  function six(e) { 
    e.preventDefault(); 
    setResult((result) => null); 
  }; 
  function seven(e) { 
    e.preventDefault(); 
    setResult((result) => null); 
  }; 
  function eight(e) { 
    e.preventDefault(); 
    setResult((result) => null); 
  }; 
  function nine(e) { 
    e.preventDefault(); 
    setResult((result) => null); 
  }; 
  function zero(e) { 
    e.preventDefault(); 
    setResult((result) => null); 
  };   

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
        <div className="digitbut">
        <button onClick={one}>1</button> 
        <button onClick={two}>2</button>
        <button onClick={three}>3</button> 
        <button onClick={four}>4</button> 
        <button onClick={five}>5</button> 
        <button onClick={six}>6</button>
        <button onClick={seven}>7</button> 
        <button onClick={eight}>8</button> 
        <button onClick={nine}>9</button> 
        <button onClick={zero}>0</button> 
        </div>
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
